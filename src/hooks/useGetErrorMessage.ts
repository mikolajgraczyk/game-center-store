import { useTranslations } from 'next-intl';

function useGetErrorMessage() {
  const t = useTranslations('errors');

  function getErrorMessage(errorObject: Error) {
    const message = errorObject.message ? t(`${errorObject.message}`) : t('DEFAULT_ERROR_MESSAGE');
    return message;
  }

  return { getErrorMessage };
}

export default useGetErrorMessage;
