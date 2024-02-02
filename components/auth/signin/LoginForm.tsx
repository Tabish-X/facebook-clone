"use client";

import Link from "next/link";
import { PrimaryButton } from "../../Buttons";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import ErrorMessage from "../../ErrorMessage";
import validateContact from "@/validations/validateContact";
import constants from "@/lib/constants";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import LoadingSpinner from "../../LoadingSpinner";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = async (data: FieldValues) => {
    setLoading(true);
    const { contact } = data;
    try {
      const res = await axios.post("/api/auth/signin", data);
      const user = res.data.user;
      const contactInfo = user.contactInfo.map((current: any) => {
        if (contact === current.contact) {
          return data;
        }
      });

      if (!user.confirm || !contactInfo[0].verified) {
        router.push("/confirmaccount");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="w-full h-auto" onSubmit={handleSubmit(handleSignIn)}>
      <label className="relative mb-4 block">
        <input
          type="text"
          placeholder="Email address or Phone Number"
          className="w-full bg-white border-gray-300 text-gray-800 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out text-base h-12 focus:shadow-sh-input-2 outline-none bg-transparent rounded-md border focus:border-blue-600"
          {...register("contact", {
            required: "Please enter email and phone number to log in",
            validate: (contact) => {
              const { success } = validateContact(contact);
              if (success) {
                return true;
              }
              return "Please enter a valid email address or phone number";
            },
          })}
        />

        <ErrorMessage message={errors.contact?.message} />
      </label>
      <label className="relative mb-4 block">
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-white border-gray-300 text-gray-800 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out text-base h-12 focus:shadow-sh-input-2 outline-none bg-transparent rounded-md border focus:border-blue-600"
          {...register("password", {
            required: "Password is required to log in",
            validate: (password) => {
              let validated = constants.passwordRe.test(password);
              if (validated) {
                return true;
              }
              return "Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &).";
            },
          })}
        />

        <ErrorMessage message={errors.password?.message} />
      </label>

      <div className="w-full">
        <PrimaryButton>
          {loading ? (
            <LoadingSpinner height="20px" width="20px" borderSize="3px" />
          ) : (
            <span>Log In</span>
          )}
        </PrimaryButton>
      </div>

      <div className="my-4 text-center">
        <Link
          href="/forget-password"
          className="text-blue-500 text-sm transition-all duration-100 hover:underline"
        >
          Forgotten password?
        </Link>
      </div>

      <div className="border-b" />
    </form>
  );
}
