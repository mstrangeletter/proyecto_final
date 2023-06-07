import React, { useState, useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

import "../css/favbuttom.css";

const FavButton = ({ property }) => {
  const [isFilled, setIsFilled] = useState(false);
  const { addFavorites, deleteFavorites } = useContext(FavoritesContext);

  const handleClick = () => {
    setIsFilled(!isFilled);
    if (!isFilled) {
      addFavorites(property);
    } else {
      deleteFavorites(property.id);
    }
  };

  return (
    <button className={`btn ${isFilled ? "filled" : ""}`} onClick={handleClick}>
      <svg
        viewBox="0 0 17.503 15.625"
        height="30px"
        width="30px"
        xmlns="http://www.w3.org/2000/svg"
        className={`icon ${isFilled ? "filled" : ""}`}
      >
        <path
          transform="translate(0 0)"
          d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z"
          id="Fill"
        ></path>
      </svg>
    </button>
  );
};

export default FavButton;
