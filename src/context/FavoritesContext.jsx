/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorites = (property) => {
    setFavorites([...favorites, property]);
  };

  const deleteFavorites = (id) => {
    const newFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(newFavorites);
  };
  

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorites, deleteFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
