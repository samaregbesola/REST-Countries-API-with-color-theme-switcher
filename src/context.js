import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let [loading, setLoading] = useState(true);
  const [miniLoading, setMiniLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const urlAll = 'https://restcountries.eu/rest/v2/all';
  const urlRegion = `https://restcountries.eu/rest/v2/region/${region}`;
  const urlSearch = `https://restcountries.eu/rest/v2/name/${searchTerm}`;

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  //fetch countries on startup
  const fetchAllCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch(urlAll);
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
    fetchAllCountries();
  }, []);

  //fetch countries by region
  const fetchRegion = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(urlRegion);
      const data = await response.json();
      if (data) {
        setCountries(data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [urlRegion]);

  useEffect(() => {
    fetchRegion();
  }, [region, fetchRegion]);

  //fetch countries by search
  const fetchSearch = useCallback(async () => {
    setMiniLoading(true);
    try {
      const response = await fetch(urlSearch);
      const data = await response.json();
      if (data) {
        setCountries(data);
      } else {
        console.log('country not found');
      }
      setMiniLoading(false);
    } catch (error) {
      console.log(error);
      setMiniLoading(false);
    }
  }, [urlSearch]);

  useEffect(() => {
    fetchSearch();
  }, [searchTerm, fetchSearch]);

  return (
    <AppContext.Provider
      value={{
        loading,
        miniLoading,
        countries,
        setCountries,
        isDropdownOpen,
        openDropdown,
        closeDropdown,
        region,
        setRegion,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
