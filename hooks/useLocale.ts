import { useRouter } from 'next/router';
import { en } from '../locales/en';
import { ru } from '../locales/ru';
import { ge } from '../locales/ge';

export interface useLocaleReturned {
  language: string;
  t: object
}

export const useLocale = (): useLocaleReturned => {
  const router = useRouter();
  const getLocale = () => {
    if (router.locale === 'en') return 'en'
    if (router.locale === 'ru') return 'ru'
    return 'ge'
  }

  const t = router.locale === 'en' ? en : (router.locale === 'ru' ? ru : ge)

  return {
    language: getLocale(),
    t
  }
  
}