"use client";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginValidationSchema } from "./loginregisterValidationSchema";
import Image from "next/image";
import Input from "@/components/input";
import FacebookLogo from "./FacebookLogo.svg";
import GoogleLogo from "./GoogleLogo.svg";
import LoginTab from "@/components/loginTab";

const Login = () => {
  const formOptions = { resolver: yupResolver(loginValidationSchema) };
  const methods = useForm(formOptions);

  return (
    <LoginTab>
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-[20px] w-full mt-[27.78px]"
          onSubmit={methods.handleSubmit((data) => console.log(data))}
        >
          <Input id="mail" placeholder="Email *" />
          <Input id="password" placeholder="Hasło *" />
          <button className="bg-backgrounds-loginButton text-center py-[10px] rounded-[5px] text-buttons-login">
            Zaloguj się
          </button>
        </form>
      </FormProvider>
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
