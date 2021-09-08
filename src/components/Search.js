import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Search = () => {
  const { closeDropdown, setSearchTerm } = useGlobalContext();

  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCountries = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form
      onMouseOver={closeDropdown}
      onSubmit={handleSubmit}
      action=""
      className="relative dark:text-white  text-veryDarkBlueText"
    >
      <button type="submit" className="absolute top-5 left-12 mr-12">
        <FaSearch className="text-gray-400 dark:text-current text-lg" />
      </button>
      <input
        type="text"
        className="bg-white dark:bg-darkBlue text-base md:text-sm shadow-md rounded-md border-0 py-5 pl-24 pr-12 placeholder-gray-400 dark:placeholder-white outline-none w-full max-w-md"
        placeholder="Search for a Country..."
        ref={searchValue}
        onChange={searchCountries}
      />
    </form>
  );
};

export default Search;
