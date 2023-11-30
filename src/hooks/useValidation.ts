import * as Yup from 'yup';
import { REGEXS } from '@/constants/regexs';
import { useTranslations } from 'next-intl';

export const useValidationSchema = () => {
  const t = useTranslations('form');

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('Name is required')).min(3, t('Minimum 3 characters required')),
    surname: Yup.string()
      .required(t('Surname is required'))
      .min(3, t('Minimum 3 characters required')),
    age: Yup.number()
      .typeError(t('Age is required'))
      .positive()
      .min(13, t('User should be at least 13 years old')),
    mail: Yup.string().required(t('Email is required')).email(t('Invalid email format')),
    password: Yup.string()
      .required(t('Password is required'))
      .matches(
        REGEXS.password,
        t('Requires 8 characters, one uppercase letter, one number, and one special character'),
      ),
    passwordConfirmation: Yup.string()
      .required(t('Repeat password'))
      .oneOf([Yup.ref('password')], t('Passwords must match')),
  });

  return validationSchema;
};
