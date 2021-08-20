import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useGlobalContext } from '../context';

const Dropdown = () => {
  const { isDropdownOpen, openDropdown, setRegion } = useGlobalContext();

  return (
    <div className="mt-12 sm:mt-0">
      <button
        onMouseOver={openDropdown}
        className="toggle text-sm shadow-md rounded-md border-0 p-5 dark:bg-darkBlue dark:text-white bg-white flex justify-between items-center"
      >
        <span className="block mr-8">Filter by Region</span>
        <span className="block text-lg">
          <MdKeyboardArrowDown />
        </span>
      </button>
      {isDropdownOpen && (
        <ul className="toggle z-10 mt-1 py-3 bg-white dark:bg-darkBlue dark:text-white border-0 cursor-pointer rounded-md shadow-md transform absolute transition duration-150 ease-in-out origin-top min-w-32">
          <li
            className="pl-5 py-1 hover:bg-veryDarkBlueBg hover:text-white"
            style={{ paddingRight: '109px' }}
            onClick={() => {
              setRegion('africa');
            }}
          >
            Africa
          </li>
          <li
            className="pl-5 py-1 hover:bg-veryDarkBlueBg hover:text-white"
            style={{ paddingRight: '109px' }}
            onClick={() => setRegion('americas')}
          >
            Americas
          </li>
          <li
            className="pl-5 py-1 hover:bg-veryDarkBlueBg hover:text-white"
            style={{ paddingRight: '109px' }}
            onClick={() => setRegion('asia')}
          >
            Asia
          </li>
          <li
            className="pl-5 py-1 hover:bg-veryDarkBlueBg hover:text-white"
            style={{ paddingRight: '109px' }}
            onClick={() => setRegion('europe')}
          >
            Europe
          </li>
          <li
            className="pl-5 py-1 hover:bg-veryDarkBlueBg hover:text-white"
            style={{ paddingRight: '109px' }}
            onClick={() => setRegion('oceania')}
          >
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
