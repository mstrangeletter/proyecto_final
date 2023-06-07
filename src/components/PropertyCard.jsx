import React, { useState, useContext } from "react";
import FavButton from "./FavButtom";
import { PropertyContext } from "../context/PropertyContext";
import { FavoritesContext } from "../context/FavoritesContext";
import "../css/propertyCard.css";

const PropertyCard = ({ property }) => {

  const { addFavorites, deleteFavorites, favorites } = useContext(FavoritesContext);
  const { data} = useContext(PropertyContext);


  const isPropertyInFavorites = favorites.some((item) => item.id === property.id);

  const handleFavButtonClick = () => {
    if (!isPropertyInFavorites) {
      addFavorite(property);
    } else {
      deleteFavorite(property.id);
    }
  };

  return (
    <article className="article_property card ">
      <div className="card_content_property">
        <h2 className="card_title">{property.tipo}</h2>
        <p className="card_description">{property.descripcion}</p>
        <h1 className="card_region">{property.region}</h1>
        <p className="card_price">{property.precio}</p>
      </div>

      <img className="img" src={property.img} alt="" />
      <div className="button-fav">
        <FavButton onClick={handleFavButtonClick} filled={isPropertyInFavorites} property={property} />
      </div>
      <div className="btns">
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Agendar Visita</span>
        </button>
      </div>
    </article>
  );
};

export default PropertyCard;
