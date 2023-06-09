/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (property) => {
    setFavorites([...favorites, property]);
  };

  const deleteFavorite = (id) => {
    const newFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(newFavorites);
  };
  

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, deleteFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
