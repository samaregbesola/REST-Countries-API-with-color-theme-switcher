import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="min-h-screen p-10 text-center text-veryDarkBlueText bg-veryLightGray dark:text-white dark:bg-veryDarkBlueBg font-nunito">
      <h2 className="font-semibold text-2xl mb-5">Welcome Adventurer</h2>
      <p className="text-sm text-center mb-5">
        Not sure how you got here 😅 but I assure you there are no treasures
        lying beyond here.
      </p>
      <Link to="/">
        <button className="tracking-wider shadow-sm px-4 py-2 text-xs capitalize rounded-sm hover:bg-white dark:hover:bg-darkBlue  hover:text-veryDarkBlueText dark:hover:text-white dark:text-veryDarkBlueText text-white bg-veryDarkBlueBg dark:bg-white transition-all duration-300">
          Go home
        </button>
      </Link>
    </section>
  );
};

export default Error;
