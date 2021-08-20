import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <form action="" className="relative dark:text-white  text-veryDarkBlueText">
      <button type="submit" className="absolute top-5 left-12 mr-12">
        <FaSearch className="text-gray-400 dark:text-current text-lg" />
      </button>
      <input
        type="text"
        className="bg-white dark:bg-darkBlue text-sm shadow-md rounded-md border-0 py-5 pl-24 pr-12 placeholder-gray-400 dark:placeholder-white outline-none w-full max-w-md"
        placeholder="Search for a Country..."
      />
    </form>
  );
};

export default Search;
