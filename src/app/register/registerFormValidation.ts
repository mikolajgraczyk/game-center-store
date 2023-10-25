import * as Yup from 'yup';
import { REGEXS } from '@/constants/regexs';

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required('Imie jest wymagane').min(3, 'Minimum 3 znaki.'),
  surname: Yup.string().required('Nazwisko jest wymagane').min(3, 'Minimum 3 znaki.'),
  age: Yup.number()
    .typeError('Wiek jest wymagany')
    .positive()
    .min(13, 'Użytkownik powinien mieć minimum 13 lat.'),
  mail: Yup.string().required('Email jest wymagany.').email('Niepoprawna forma Emaila.'),
  password: Yup.string()
    .required('Hasło jest wymagane.')
    .matches(
      REGEXS.password,
      'Minimum 8 znaków, jedna duża litera, jedna cyfra i jeden znak specjalny.',
    ),
  passwordConfirmation: Yup.string()
    .required('Powtórz hasło')
    .oneOf([Yup.ref('password')], 'Hasła muszą być takie same'),
});
