"use client";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import Input from "@/components/input";
import LoginTab from "@/components/loginTab";

const Register = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Imie jest wymagane")
      .min(3, "Minimum 3 znaki."),
    surname: Yup.string()
      .required("Nazwisko jest wymagane")
      .min(3, "Minimum 3 znaki."),
    age: Yup.number()
      .required("Wiek jest wymagany")
      .positive()
      .min(13, "Użytkownik powinien mieć minimum 13 lat."),
    mail: Yup.string()
      .required("Email jest wymagany.")
      .email("Niepoprawna forma Emaila."),
    password: Yup.string()
      .required("Hasło jest wymagane.")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Minimum 8 znaków, jedna duża litera, jedna cyfra i jeden znak specjalny."
      ),
    passwordConfirmation: Yup.string()
      .required("Powtóz hasło")
      .oneOf([Yup.ref("password")], "Hasła muszą być takie same"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const methods = useForm(formOptions);

  return (
    <LoginTab>
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-[20px] w-full mt-[27.78px]"
          onSubmit={methods.handleSubmit((data) => console.log(data))}
        >
          <Input id="name" placeholder="Imię *" />
          <Input id="surname" placeholder="Nazwisko *" />
          <Input id="age" placeholder="Wiek *" />
          <Input id="mail" placeholder="Email *" />
          <Input id="password" placeholder="Hasło *" />
          <Input id="passwordConfirmation" placeholder="Powtórz hasło *" />
          <button className="bg-backgrounds-loginButton text-center py-[10px] rounded-[5px] text-buttons-login">
            Zaloguj się
          </button>
        </form>
      </FormProvider>
    </LoginTab>
  );
};

export default Register;
