"use client";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidationSchema } from "./registerFormValidation";
import Input from "@/components/input";
import LoginTab from "@/components/loginTab";
import { useTranslations } from "next-intl";

const Register = () => {
  const t = useTranslations("form");

  const formOptions = { resolver: yupResolver(registerValidationSchema) };
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
            id="name"
            placeholder={t("name")}
            type="text"
            errorMessage={errors.name?.message}
          />
          <Input
            id="surname"
            placeholder={t("surname")}
            type="text"
            errorMessage={errors.surname?.message}
          />
          <Input
            id="age"
            placeholder={t("age")}
            type="number"
            errorMessage={errors.age?.message}
          />
          <Input
            id="mail"
            placeholder={t("email")}
            type="email"
            errorMessage={errors.mail?.message}
          />
          <Input
            id="password"
            placeholder={t("password")}
            type="password"
            errorMessage={errors.password?.message}
          />
          <Input
            id="passwordConfirmation"
            placeholder={t("passwordRepeat")}
            type="password"
            errorMessage={errors.passwordConfirmation?.message}
          />
          <button className="bg-backgrounds-loginButton text-center py-[10px] rounded-[5px] text-buttons-login">
            {t("register")}
          </button>
        </form>
      </FormProvider>
    </LoginTab>
  );
};

export default Register;
