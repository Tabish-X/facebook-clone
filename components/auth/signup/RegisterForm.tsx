"use client";
import DOBField from "./DOBField";
import Gender from "./Gender";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "./TextInput";
import { SignupButton } from "../../Buttons";
import PlaceholderData from "../PlaceholderData";
import { useState } from "react";
import formatUser from "@/helpers/formatUser";
import axios from "axios";
import { useRouter } from "next/navigation";
import userSchema, { RawUser } from "@/schemas/userSchema";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(userSchema),
    mode: "all",
  });

  const onSubmit = async (formData: RawUser) => {
    setLoading(true);
    const { error, user } = await formatUser(formData);
    if (error) {
      setError("credential", { message: error ? error : "" });
      setLoading(false);
      return;
    } else if (user) {
      try {
        await axios.post("/api/auth/signup", user);
        router.push("/confirmaccount");
      } catch (error: any) {
        console.error("Message: ", error?.response?.data?.message);
        console.error("Error: ", error.message);
        throw new Error("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    //@ts-ignore
    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-[12px]">
        <div className="flex gap-3 h-fit">
          <TextInput
            errors={errors}
            register={register}
            placeholder="First name"
            name="firstName"
          />

          <TextInput
            errors={errors}
            register={register}
            placeholder="Last name"
            name="lastName"
          />
        </div>

        <TextInput
          errors={errors}
          register={register}
          placeholder="Mobile number or Email address"
          name="credential"
        />
        <TextInput
          errors={errors}
          register={register}
          placeholder="New password"
          name="password"
        />
        <DOBField errors={errors} register={register} />

        <Gender errors={errors} register={register} />
        <PlaceholderData />

        <SignupButton loading={loading} />
      </div>
    </form>
  );
}
