import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoIosAddCircleOutline, IoMdExit } from 'react-icons/io';

export default function Navigation({ logout }) {
  return (
    <div className="flex gap-4">
      <Link
        to="/"
        className="text-xs md:text-base px-2 bg-white text-center rounded-md sm:px-4 py-2 font-semibold flex items-center gap-2 hover:scale-105 transition duration-100 active:scale-95 hover:ring-2 hover:ring-sky-800"
      >
        Catatan Aktif
      </Link>
      <Link
        to="/archived"
        className="text-xs md:text-base px-2 bg-white text-center rounded-md sm:px-4 py-2 font-semibold flex items-center gap-2 hover:scale-105 transition duration-100 active:scale-95 hover:ring-2 hover:ring-sky-800"
      >
        Arsip Catatan
      </Link>

      <Link
        to="/new-notes"
        className="text-xs md:text-base px-2 bg-white text-center rounded-md sm:px-4 py-2 font-semibold flex items-center gap-2 hover:scale-105 transition duration-100 active:scale-95 hover:ring-2 hover:ring-sky-800"
      >
        <IoIosAddCircleOutline className="text-xl" />
        Tambah Catatan
      </Link>
      <button
        className="text-xs md:text-base px-2 bg-white text-center rounded-md sm:px-4 py-2 font-semibold flex items-center gap-2 hover:scale-105 transition duration-100 active:scale-95 hover:ring-2 hover:ring-sky-800"
        onClick={logout}
      >
        Logout
        <IoMdExit />
      </button>
    </div>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};
