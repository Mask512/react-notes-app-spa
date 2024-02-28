import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import ThemeContext from '../context/themeContext';
import { useContext } from 'react';

export default function ToggleDarkMode() {
  const { theme, toggleTheme } = useContext(ThemeContext);  

  return (
    <button
      className="text-2xl rounded p-2 hover:scale-105 transition duration-100 active:scale-95 hover:ring-2 hover:ring-sky-800"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <MdOutlineLightMode />
      ) : (
        <MdDarkMode />
      )}
    </button>
  );
}
