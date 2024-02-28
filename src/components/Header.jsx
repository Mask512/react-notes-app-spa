import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import PropTypes from 'prop-types';

export default function Header({ isAuthed, logout }) {
  return (
    <div className="flex justify-between items-center text-sky-800 mb-4">
      <Link to="/" className="flex">
        <img
          src="/icon.png"
          alt="Icon image"
          className="max-w-[56px] inline-block mr-4"
        />
        <h1 className="hidden md:inline-block text-4xl uppercase font-bold leading-relaxed tracking-wide drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Catatanku
        </h1>
      </Link>
      {isAuthed ? <Navigation logout={logout} /> : ''}
    </div>
  );
}

Header.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  logout: PropTypes.func,
};
