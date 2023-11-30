'use client';

import { useTranslations } from 'next-intl';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useValidationSchema from '@/hooks/useValidation';
import Input from '@/components/input';
import LoginTab from '@/components/loginTab';

function Register() {
  const t = useTranslations('form');

  const { registerValidationSchema } = useValidationSchema();
  const formOptions = { resolver: yupResolver(registerValidationSchema) };

  const methods = useForm(formOptions);
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <main className="flex items-center justify-center h-[calc(100%-120px)]">
      <LoginTab>
        <FormProvider {...methods}>
          <form
            className="flex flex-col gap-[20px] w-full mt-[27.78px]"
            onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
          >
            <Input
              id="name"
              placeholder={t('Name *')}
              type="text"
              errorMessage={errors.name?.message}
            />
            <Input
              id="surname"
              placeholder={t('Surname *')}
              type="text"
              errorMessage={errors.surname?.message}
            />
            <Input
              id="age"
              placeholder={t('Age *')}
              type="number"
              errorMessage={errors.age?.message}
            />
            <Input
              id="mail"
              placeholder={t('Email *')}
              type="email"
              errorMessage={errors.mail?.message}
            />
            <Input
              id="password"
              placeholder={t('Password *')}
              type="password"
              errorMessage={errors.password?.message}
            />
            <Input
              id="passwordConfirmation"
              placeholder={t('Repeat Password *')}
              type="password"
              errorMessage={errors.passwordConfirmation?.message}
            />
            <button
              type="submit"
              className="bg-backgrounds-loginButton text-center py-[10px] rounded-[5px] text-buttons-login"
            >
              {t('Register')}
            </button>
          </form>
        </FormProvider>
      </LoginTab>
    </main>
  );
}

export default Register;
