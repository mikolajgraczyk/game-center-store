"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import FacebookLogo from "./FacebookLogo.svg";
import GoogleLogo from "./GoogleLogo.svg";
import LoginTab from "@/components/loginTab";

const Login = () => {
  const { register, handleSubmit } = useForm();

  return (
    <LoginTab>
      <form
        className="flex flex-col gap-[20px] w-full mt-[27.78px]"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <input
          {...register("email")}
          placeholder="Email *"
          className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Hasło *"
          className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
        />
        <button className="bg-backgrounds-loginButton text-center py-[10px] rounded-[5px] text-buttons-login">
          Zaloguj się
        </button>
      </form>
      <div className="flex gap-[15px]">
        <button className="bg-backgrounds-socialButton p-[5px] rounded-full">
          <Image src={FacebookLogo} alt="Facebook Logo" />
        </button>
        <button className="bg-backgrounds-socialButton p-[5px] rounded-full">
          <Image src={GoogleLogo} alt="Google Logo" />
        </button>
      </div>
    </LoginTab>
  );
};

export default Login;
