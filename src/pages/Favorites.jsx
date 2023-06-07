import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import PropertyCard from "../components/PropertyCard";
import { Grid } from "@mui/material";

const Favorites = () => {
  const { favorites, deleteFavorites } = useContext(FavoritesContext);

  return (
    <div className="container_favorites">
      <h1 className="title_favorites">Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No existen favoritos</p>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <PropertyCard
                property={property}
                handleFavButtonClick={deleteFavorites}
                isPropertyInFavorites={true}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Favorites;
