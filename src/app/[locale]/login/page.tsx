"use client";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setValidationSchema } from "./loginValidationSchema";
import Input from "@/components/input";
import FacebookLogo from "/public/icons/FacebookLogo.svg";
import GoogleLogo from "/public/icons/GoogleLogo.svg";
import LoginTab from "@/components/loginTab";
import { useTranslations } from "next-intl";

const Login = () => {
  const t = useTranslations("form");

  const loginValidationSchema = setValidationSchema(t);
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
            placeholder={t("emailPlaceholder")}
            type="email"
            errorMessage={errors.mail?.message}
          />
          <Input
            id="password"
            placeholder={t("passwordPlaceholder")}
            type="password"
            errorMessage={errors.password?.message}
          />
          <button className="bg-backgrounds-loginButton text-center py-[10px] rounded-[5px] text-buttons-login">
            {t("logIn")}
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
