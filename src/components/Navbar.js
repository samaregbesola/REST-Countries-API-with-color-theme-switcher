import React from 'react';
import ToggleBtn from './ToggleBtn';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { closeDropdown } = useGlobalContext();
  return (
    <nav
      onMouseOver={closeDropdown}
      className="w-full bg-white dark:bg-darkBlue shadow-lg"
    >
      <div className=" py-6 max-w-7xl w-11/12 md:w-11/12 mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="font-semibold text-sm sm:text-xl capitalize dark:text-white">
            where in the world?
          </h1>
        </Link>
        <ToggleBtn />
      </div>
    </nav>
  );
};

export default Navbar;
