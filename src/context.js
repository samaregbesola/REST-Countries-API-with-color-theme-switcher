import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const url = 'https://restcountries.eu/rest/v2/all';

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setCountries(data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <AppContext.Provider value={{ loading, countries }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
