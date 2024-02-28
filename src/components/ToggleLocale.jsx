import { useContext, useEffect } from 'react';
import LocaleContext from '../context/localeContext';

export default function ToggleLocale() {
  const { locale, setLocale } = useContext(LocaleContext);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  return (
    <div className="text-xs md:text-base px-2 bg-white text-center rounded-md sm:px-4 py-2 font-semibold flex items-center gap-2  hover:ring-2 hover:ring-sky-800 dark:bg-transparent dark:border">
      <button
        onClick={() => setLocale('en')}
        className={locale !== 'id' ? 'underline underline-offset-2' : ''}
      >
        EN
      </button>
      <div>|</div>
      <button
        onClick={() => setLocale('id')}
        className={locale === 'id' ? 'underline underline-offset-2' : ''}
      >
        ID
      </button>
    </div>
  );
}
