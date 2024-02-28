import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  IoIosAddCircleOutline,
  IoMdExit,
  IoIosJournal,
  IoMdArchive,
} from 'react-icons/io';
import { useContext } from 'react';
import LocaleContext from '../context/localeContext';

export default function Navigation({ logout }) {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="flex gap-4 mx-4">
      <Link
        to="/"
        className="text-xs max-h-12 md:text-base px-2 bg-white text-center rounded-md sm:px-4 py-2 font-semibold flex items-center gap-2 hover:scale-105 transition duration-100 active:scale-95 hover:ring-2 hover:ring-sky-800 dark:bg-transparent dark:border"
      >
        <IoIosJournal className="text-xl" />
        <span className="leading-4 hidden lg:block">
          {locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}
        </span>
      </Link>
      <Link
        to="/archived"
        className="text-xs max-h-12 md:text-base px-2 bg-white text-center rounded-md sm:px-4 py-2 font-semibold flex items-center gap-2 hover:scale-105 transition duration-100 active:scale-95 hover:ring-2 hover:ring-sky-800 dark:bg-transparent dark:border"
      >
        <IoMdArchive className="text-xl" />
        <span className="leading-4 hidden lg:block">
          {locale === 'id' ? 'Arsip Catatan' : 'Archived Notes'}
        </span>
      </Link>

      <Link
        to="/new-notes"
        className="text-xs max-h-12 lineg md:text-base px-2 bg-white text-center rounded-md sm:px-4 py-2 font-semibold flex items-center gap-2 hover:scale-105 transition duration-100 active:scale-95 hover:ring-2 hover:ring-sky-800 dark:bg-transparent dark:border"
      >
        <IoIosAddCircleOutline className="text-xl" />
        <span className="leading-4 hidden lg:block">
          {locale === 'id' ? 'Tambah Catatan' : 'Add Notes'}
        </span>
      </Link>
      <button
        className="text-xl md:text-base px-2 bg-white text-center rounded-md sm:px-4 py-2 font-semibold flex items-center gap-2 hover:scale-105 transition duration-100 active:scale-95 hover:ring-2 hover:ring-sky-800 dark:bg-transparent dark:border"
        onClick={logout}
      >
        <span className="hidden lg:block">Logout</span>
        <IoMdExit />
      </button>
    </div>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};
