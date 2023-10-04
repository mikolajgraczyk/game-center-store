"use client";

import { useForm } from "react-hook-form";
import LoginTab from "@/components/loginTab";

const Register = () => {
  const { register, handleSubmit } = useForm();

  return (
    <LoginTab>
      <form
        className="flex flex-col gap-[20px] w-full mt-[27.78px]"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <input
          {...register("name")}
          placeholder="Imię *"
          className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
        />
        <input
          {...register("surname")}
          placeholder="Nazwisko *"
          className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
        />
        <input
          {...register("age")}
          placeholder="Wiek *"
          className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
        />
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
        <input
          {...register("passwordRepeated")}
          type="password"
          placeholder="Powtórz hasło *"
          className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
        />
        <button className="bg-backgrounds-loginButton text-center py-[10px] rounded-[5px] text-buttons-login">
          Zaloguj się
        </button>
      </form>
    </LoginTab>
  );
};

export default Register;
