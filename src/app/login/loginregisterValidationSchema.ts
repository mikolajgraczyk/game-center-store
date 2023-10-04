import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  mail: Yup.string()
    .required("Email jest wymagany.")
    .email("Niepoprawna forma Emaila."),
  password: Yup.string()
    .required("Hasło jest wymagane.")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Wymagane 8 znaków, jedna duża litera, jedna cyfra i jeden znak specjalny."
    ),
});
