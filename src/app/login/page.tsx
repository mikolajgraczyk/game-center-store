"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import Image from "next/image";
import FacebookLogo from "./FacebookLogo.svg";
import GoogleLogo from "./GoogleLogo.svg";
import LoginTab from "@/components/loginTab";

const Login = () => {
  const validationSchema = Yup.object().shape({
    mail: Yup.string()
      .required("Email jest wymagany.")
      .email("Niepoprawna forma Emaila."),
    password: Yup.string()
      .required("Hasło jest wymagane.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Minimum osiem znaków, co najmniej jedna litera i jedna cyfra"
      ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  return (
    <LoginTab>
      <form
        className="flex flex-col gap-[20px] w-full mt-[27.78px]"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div className="relative">
          <input
            {...register("mail")}
            placeholder="Email *"
            className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
          />
          {errors.mail ? (
            <span className="text-[12px] text-[#EA1818] absolute left-0 bottom-[-19px]">
              {errors.mail.message}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="relative">
          <input
            {...register("password")}
            type="password"
            placeholder="Hasło *"
            className="w-full rounded-[5px] bg-backgrounds-loginInput h-[40px] px-[16px] py-[10px]"
          />
          {errors.password ? (
            <span className="text-[12px] text-[#EA1818] absolute left-0 bottom-[-19px]">
              {errors.password.message}
            </span>
          ) : (
            ""
          )}
        </div>
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
