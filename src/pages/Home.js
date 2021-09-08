import React, { useEffect } from 'react';
import Card from '../components/Card';
import Search from '../components/Search';
import Dropdown from '../components/Dropdown';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context';
import MiniLoading from '../components/MiniLoading';
import useInfiniteScroll from '../useInfiniteScroll';

const Home = () => {
  const { loading, countries, closeDropdown, region, searchTerm, miniLoading } =
    useGlobalContext();

  if (loading) {
    <Loading />;
  }
  if (region) {
    return (
      <>
        <div className="py-12 max-w-7xl w-11/12 md:w-11/12 mx-auto">
          <div className="mb-12 sm:flex sm:flex-auto  sm:justify-between sm:items-center">
            <div className=" sm:flex-auto">
              <Search />
            </div>
            <div className="toggle">
              <Dropdown />
            </div>
          </div>
          <div
            className="mx-5 sm:mx-0 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            onMouseOver={closeDropdown}
          >
            {countries &&
              countries.map(country => {
                const { numericCode: id } = country;
                return <Card key={id} {...country} />;
              })}
          </div>
        </div>
      </>
    );
  }
  if (searchTerm) {
    return (
      <>
        {miniLoading ? (
          <div className="py-12 max-w-7xl w-11/12 md:w-11/12 mx-auto">
            <div className="mb-12 sm:flex sm:flex-auto  sm:justify-between sm:items-center">
              <div className=" sm:flex-auto">
                <Search />
              </div>
              <div className="toggle">
                <Dropdown />
              </div>
            </div>
            <div className="flex justify-center text-veryDarkBlueText dark:text-white">
              <MiniLoading />
            </div>
          </div>
        ) : (
          <div className="py-12 max-w-7xl w-11/12 md:w-11/12 mx-auto">
            <div className="mb-12 sm:flex sm:flex-auto  sm:justify-between sm:items-center">
              <div className=" sm:flex-auto">
                <Search />
              </div>
              <div className="toggle">
                <Dropdown />
              </div>
            </div>
            <div
              className="mx-5 sm:mx-0 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              onMouseOver={closeDropdown}
            >
              {countries.length >= 1 ? (
                countries.map(country => {
                  const { numericCode: id } = country;
                  return <Card key={id} {...country} />;
                })
              ) : (
                <h2 className="my-4 mx-auto font-semibold text-3xl col-span-4 dark:text-white text-veryDarkBlueText">
                  Sorry country not found
                </h2>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
  return (
    <>
      <div className="py-12 max-w-7xl w-11/12 md:w-11/12 mx-auto">
        <div className="mb-12 sm:flex sm:flex-auto  sm:justify-between sm:items-center">
          <div className="sm:flex-auto">
            <Search />
          </div>
          <div className="toggle">
            <Dropdown />
          </div>
        </div>
        <div
          className="mx-5 sm:mx-0 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          onMouseOver={closeDropdown}
        >
          {countries &&
            countries.map(country => {
              const { alpha3Code: id } = country;
              return <Card key={id} {...country} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
