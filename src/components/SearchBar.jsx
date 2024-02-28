import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import LocaleContext from '../context/localeContext';

export default function SearchBar({ onSearch, keyword }) {
  const { locale } = useContext(LocaleContext);
  const [searchTerm, setSearchTerm] = useState(keyword || '');
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };
  
  return (
    <div className="bg-white p-4 rounded shadow-xl mb-4 dark:bg-gray-700">
      <h3 className="text-2xl font-bold text-gray-700 mb-4">{ locale === 'id' ? 'Cari Catatan' : 'Search Notes'}</h3>
      <div className="flex items-center ">
        <div className="relative w-full">
          <input
            type="text"
            className="h-12 w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="..."
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  keyword: PropTypes.string,
};
