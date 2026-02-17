import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalStateContext = createContext();

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within GlobalStateProvider");
  }
  return context;
};

export const GlobalStateProvider = ({ children }) => {
  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Filter state
  const [filters, setFilters] = useState({
    collections: {
      material: [],
      size: [],
      color: [],
      price: { min: 0, max: 50000 },
      style: [],
    },
    projects: {
      sector: [],
      year: [],
      location: [],
    },
  });

  // Dark Mode state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    console.log("Dark mode toggled:", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Filter functions
  const updateFilters = (page, filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [page]: {
        ...prevFilters[page],
        [filterType]: value,
      },
    }));
  };

  const clearFilters = (page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [page]:
        page === "collections"
          ? {
            material: [],
            size: [],
            color: [],
            price: { min: 0, max: 50000 },
            style: [],
          }
          : {
            sector: [],
            year: [],
            location: [],
          },
    }));
  };

  const value = {
    // Search
    searchQuery,
    setSearchQuery,

    // Filters
    filters,
    updateFilters,
    clearFilters,

    // Dark Mode
    darkMode,
    toggleDarkMode,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};
