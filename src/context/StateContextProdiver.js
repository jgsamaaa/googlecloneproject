import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('CSGO');

  // type = type of results like /search, /news or /images
  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      },
    });

    const data = await response.json();

    console.log(data);

    setResults(data);
    setIsLoading(false);
  };

  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
