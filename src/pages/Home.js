import React from 'react';
import Card from '../components/Card';
import Search from '../components/Search';
import Dropdown from '../components/Dropdown';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context';

const Home = () => {
  const { loading, countries } = useGlobalContext();

  if (loading) {
    <Loading />;
  }
  return (
    <>
      <div className="py-12 max-w-7xl w-11/12 md:w-11/12 mx-auto">
        <div className="mb-12 sm:flex sm:flex-auto  sm:justify-between sm:items-center">
          <div className=" sm:flex-auto">
            <Search />
          </div>
          <Dropdown />
        </div>
        <div className="mx-5 sm:mx-0 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {countries &&
            countries.map(country => {
              const { numericCode: id } = country;
              return <Card key={id} {...country} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
