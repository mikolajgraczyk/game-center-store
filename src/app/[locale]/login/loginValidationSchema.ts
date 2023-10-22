import * as Yup from "yup";
import { REGEXS } from "@/constants/regexs";

export const setValidationSchema = (t) => {
  const loginValidationSchema = Yup.object().shape({
    mail: Yup.string().required(t("emailRequired")).email(t("emailIncorrect")),
    password: Yup.string()
      .required(t("passwordRequired"))
      .matches(REGEXS.password, t("passwordRequirements")),
  });

  return loginValidationSchema;
};
