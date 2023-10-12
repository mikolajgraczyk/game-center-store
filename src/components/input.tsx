import React from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ id, errorMessage, ...inputProps }) => {
  const { register } = useFormContext();

  return (
    <div className="relative">
      <input
        {...register(id)}
        {...inputProps}
        className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
      />
      {errorMessage ? (
        <span className="text-[10px] text-[#EA1818] absolute left-0 bottom-[-15px]">
          {errorMessage}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
