import React from 'react';
import { ThemeContext } from '../themeContext';
import { HiOutlineMoon, HiMoon } from 'react-icons/hi';

const ToggleBtn = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <>
      {theme === 'dark' ? (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex p-2 rounded-md dark:bg-darkBlue dark:text-white cursor-pointer items-center font-semibold capitalize text-xs sm:text-sm dark:hover:bg-veryLightGray dark:hover:text-veryDarkBlueText hover:bg-veryDarkBlueBg hover:text-white hover:shadow-md transition-all duration-300"
        >
          <span className="mr-3">
            <HiMoon />
          </span>
          light mode
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex p-2 rounded-md dark:bg-darkBlue dark:text-white cursor-pointer items-center font-semibold capitalize text-xs sm:text-sm dark:hover:bg-veryLightGray dark:hover:text-veryDarkBlueText hover:bg-veryDarkBlueBg hover:text-white hover:shadow-md"
        >
          <span className="mr-3">
            <HiOutlineMoon />
          </span>
          dark mode
        </button>
      )}
    </>
  );
};

export default ToggleBtn;
