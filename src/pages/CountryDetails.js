import { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import MiniLoading from '../components/MiniLoading';
import { useParams, Link, useHistory } from 'react-router-dom';

const CountryDetails = () => {
  const { name } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState([]);

  const getCountry = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v2/name/${name}?fullText=true`
      );
      const data = await response.json();
      if (data) {
        setCountry(data);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCountry();
  }, [name]);

  if (loading) {
    return <MiniLoading />;
  }
  if (!country) {
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
  } else {
    return (
      <main className="min-h-screen dark:bg-veryDarkBlueBg dark:text-white  bg-veryLightGray text-veryDarkBlueText font-nunito text-sm">
        <section className="py-10 lg:py-20 max-w-7xl w-11/12 md:w-11/12 mx-auto">
          <button
            onClick={() => {
              history.goBack();
            }}
            className="flex items-center tracking-wider shadow-sm px-7 py-2 text-sm capitalize rounded-sm dark:bg-darkBlue dark:text-white cursor-pointer font-light  sm:text-sm dark:hover:bg-veryLightGray dark:hover:text-veryDarkBlueText hover:bg-veryDarkBlueBg hover:text-white transition-all duration-300"
          >
            <span className="mr-3">
              <FaArrowLeft />
            </span>{' '}
            <span className="mt-0.5">Back</span>
          </button>

          {country.map(item => {
            const {
              name,
              nativeName,
              population,
              subregion,
              region,
              currencies,
              languages,
              capital,
              flag,
              topLevelDomain,
              borders,
            } = item;
            return (
              <article
                className="lg:flex mt-20 mb-10 lg:mb-40 mx-5 lg:mx-0"
                style={{ gap: '11.3%' }}
              >
                <img
                  src={flag}
                  className=" object-cover w-full h-52 sm:h-72 md:h-80 lg:h-96 block flex-1 "
                  alt={name}
                />
                <div className=" self-center flex-1 ">
                  <h2 className="font-extrabold text-2xl mb-10 lg:mb-5 mt-10 lg:mt-0">
                    {name}
                  </h2>
                  <div className="flex flex-wrap justify-between mb-10">
                    <ul className="capitalize mb-10 lg:mb-0">
                      <li className="mb-3">
                        <span className="font-semibold text-base mr-1">
                          native name:
                        </span>{' '}
                        {nativeName}
                      </li>
                      <li className="mb-3">
                        <span className="font-semibold text-base mr-1">
                          population:
                        </span>{' '}
                        {population.toLocaleString()}
                      </li>
                      <li className="mb-3">
                        <span className="font-semibold text-base mr-1">
                          region:
                        </span>{' '}
                        {region}
                      </li>
                      <li className="mb-3">
                        <span className="font-semibold text-base mr-1">
                          sub region:
                        </span>{' '}
                        {subregion}
                      </li>
                      <li className="mb-3">
                        <span className="font-semibold text-base mr-1">
                          capital:
                        </span>{' '}
                        {capital}
                      </li>
                    </ul>

                    <ul className="capitalize mr-3">
                      <li className="mb-3">
                        <span className="font-semibold text-base mr-1">
                          top level domain:
                        </span>{' '}
                        {topLevelDomain}
                      </li>
                      <li className="mb-3">
                        <span className="font-semibold text-base mr-1">
                          currencies:
                        </span>{' '}
                        {currencies[0].name}
                      </li>
                      <li className="mb-3">
                        <span className="font-semibold text-base mr-1">
                          languages:
                        </span>{' '}
                        {languages[0].name}
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap capitalize items-center">
                    <span className="font-semibold align-center text-base mr-5 mb-5 lg:mb-0">
                      border countries:
                    </span>
                    {borders.map(border => {
                      return (
                        <ul
                          key={border}
                          className="flex gap-2 lg:mt-2 items-center"
                        >
                          <li className="self-center tracking-wider shadow-sm px-7 py-2 text-sm capitalize rounded-sm mr-2 mb-2 dark:bg-darkBlue dark:text-white cursor-pointer font-light  sm:text-sm dark:hover:bg-veryLightGray dark:hover:text-veryDarkBlueText hover:bg-veryDarkBlueBg hover:text-white transition-all duration-300">
                            {border}
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    );
  }
};

export default CountryDetails;
