import * as Yup from "yup";
import { regexs } from "@/constants/regexs";

export const loginValidationSchema = Yup.object().shape({
  mail: Yup.string()
    .required("Email jest wymagany.")
    .email("Niepoprawna forma Emaila."),
  password: Yup.string()
    .required("Hasło jest wymagane.")
    .matches(
      regexs.password,
      "Wymagane 8 znaków, jedna duża litera, jedna cyfra i jeden znak specjalny."
    ),
});
