import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from 'react-icons/io';

export default function Header() {
  return (
    <div className="flex justify-between items-center text-sky-800 mb-4">
      <Link to="/" className='flex'>
        <img
          src="/icon.png"
          alt="Icon image"
          className="max-w-[56px] inline-block mr-4"
        />
        <h1 className="hidden md:inline-block text-4xl uppercase font-bold leading-relaxed tracking-wide drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Catatanku
        </h1>
      </Link>
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
      </div>
    </div>
  );
}
