import * as Yup from "yup";
import { REGEXS } from "@/constants/regexs";
import { useTranslations } from "next-intl";

export const useValidationSchema = () => {
  const t = useTranslations("form");

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required(t("nameRequired"))
      .min(3, t("minSymbolsRequired")),
    surname: Yup.string()
      .required(t("surnameRequired"))
      .min(3, t("minSymbolsRequired")),
    age: Yup.number()
      .typeError(t("ageRequired"))
      .positive()
      .min(13, t("minAgeRequired")),
    mail: Yup.string().required(t("emailRequired")).email(t("emailIncorrect")),
    password: Yup.string()
      .required(t("passwordRequired"))
      .matches(REGEXS.password, t("passwordRequirements")),
    passwordConfirmation: Yup.string()
      .required(t("passwordRepeat"))
      .oneOf([Yup.ref("password")], t("passwordConfirmationFailure")),
  });

  return validationSchema;
};
