"use client";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "./loginregisterValidationSchema";
import Input from "@/components/input";
import FacebookLogo from "/public/icons/FacebookLogo.svg";
import GoogleLogo from "/public/icons/GoogleLogo.svg";
import LoginTab from "@/components/loginTab";

const Login = () => {
  const formOptions = { resolver: yupResolver(loginValidationSchema) };
  const methods = useForm(formOptions);
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <LoginTab>
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-[20px] w-full mt-[27.78px]"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <Input
            id="mail"
            placeholder="Email *"
            type="email"
            errorMessage={errors.mail?.message}
          />
          <Input
            id="password"
            placeholder="Hasło *"
            type="password"
            errorMessage={errors.password?.message}
          />
          <button className="bg-backgrounds-loginButton text-center py-[10px] rounded-[5px] text-buttons-login">
            Zaloguj się
          </button>
        </form>
      </FormProvider>
      <div className="flex gap-[15px]">
        <button className="bg-backgrounds-socialButton p-[5px] rounded-full">
          <FacebookLogo />
        </button>
        <button className="bg-backgrounds-socialButton p-[5px] rounded-full">
          <GoogleLogo />
        </button>
      </div>
    </LoginTab>
  );
};

export default Login;
