"use client";

export default function TextInput({
  value,
  setValue,
}: {
  value: string;
  setValue: Function;
}) {
  return (
    <div className="w-[136px] h-14 bg-white rounded-md my-5">
      <div className="w-full h-full flex items-center justify-start relative">
        <span className="pl-3 h-full my-auto align-middle flex items-center text-gray-30">
          FB-
        </span>

        <label className="absolute top-0 left-0 w-full h-full bg-transparent">
          <input
            type="text"
            className="shadow-input w-full h-full outline-none pl-10 pr-3 bg-transparent rounded-md border focus:border-blue-600"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            max={5}
            min={5}
            maxLength={5}
            minLength={5}
            name="otp"
          />
        </label>
      </div>
    </div>
  );
}
