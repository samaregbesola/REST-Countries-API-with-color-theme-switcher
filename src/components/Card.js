import React from 'react';

const Card = ({ id, name, flag, population, region, capital }) => {
  return (
    <article className="rounded-md overflow-hidden bg-white dark:bg-darkBlue shadow-sm">
      <img src={flag} className="w-full object-cover h-40" alt="meal" />
      <div className=" px-6 py-6 capitalize">
        <h2 className="text-xl mb-4 font-extrabold">{name}</h2>
        <p className=" mb-1">
          {' '}
          <span className="font-semibold">population:</span> {population}
        </p>
        <p className=" mb-1">
          {' '}
          <span className="font-semibold">region:</span> {region}
        </p>
        <p className=" mb-3">
          {' '}
          <span className="font-semibold">capital:</span> {capital}
        </p>
      </div>
    </article>
  );
};

export default Card;
