'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationSchema } from '@/hooks/useValidation';
import Input from '@/components/input';
import FacebookLogo from '/public/icons/FacebookLogo.svg';
import GoogleLogo from '/public/icons/GoogleLogo.svg';
import LoginTab from '@/components/loginTab';

const Login = () => {
  const validationSchema = useValidationSchema();
  const t = useTranslations('form');

  const formOptions = { resolver: yupResolver(validationSchema) };
  const methods = useForm(formOptions);
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <LoginTab>
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-[20px] w-full mt-[27.78px]"
          onSubmit={handleSubmit((data) => console.log(data))}
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
          <button className="bg-backgrounds-loginButton text-center py-[10px] rounded-[5px] text-buttons-login">
            {t('Log In')}
          </button>
        </form>
      </FormProvider>
      <div className="flex gap-[15px]">
        <button className="bg-backgrounds-socialButton p-[5px] rounded-full">
          <FacebookLogo />
        </button>
        <button className="bg-backgrounds-socialButton p-[5px] rounded-full">
          <GoogleLogo />
        </button>
      </div>
    </LoginTab>
  );
};

export default Login;
