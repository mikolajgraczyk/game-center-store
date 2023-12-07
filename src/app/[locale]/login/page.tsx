'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import FacebookLogo from '@icons/FacebookLogo.svg';
import GoogleLogo from '@icons/GoogleLogo.svg';
import { useTranslations } from 'next-intl';
import useValidationSchema from '@/hooks/useValidation';
import Input from '@/components/input';
import LoginTab from '@/components/loginTab';

function Login() {
  const { loginValidationSchema } = useValidationSchema();
  const t = useTranslations('form');

  const formOptions = { resolver: yupResolver(loginValidationSchema) };
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
            <button
              type="submit"
              className="bg-backgrounds-loginButton text-center py-[10px] rounded-[5px] text-buttons-login"
            >
              {t('Log In')}
            </button>
          </form>
        </FormProvider>
        <div className="flex gap-[15px]">
          <button type="button" className="bg-backgrounds-socialButton p-[5px] rounded-full">
            <FacebookLogo />
          </button>
          <button type="button" className="bg-backgrounds-socialButton p-[5px] rounded-full">
            <GoogleLogo />
          </button>
        </div>
      </LoginTab>
    </main>
  );
}

export default Login;
