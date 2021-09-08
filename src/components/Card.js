import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, flag, population, region, capital }) => {
  return (
    <Link to={`/details/${name}`}>
      <article className="rounded-md overflow-hidden cursor-pointer bg-white dark:bg-darkBlue shadow-sm">
        <img
          src={flag}
          loading="lazy"
          className="w-full object-cover h-40"
          alt={name}
        />
        <div className=" px-6 py-6 capitalize">
          <h2 className="text-xl mb-4 font-extrabold">{name}</h2>
          <p className=" mb-1">
            {' '}
            <span className="font-semibold">population:</span>{' '}
            {population.toLocaleString()}
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
    </Link>
  );
};

export default Card;
