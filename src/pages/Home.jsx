import React, { useContext, useState } from "react";
import { PropertyContext } from "../context/PropertyContext";
import { Grid } from "@mui/material";
import PropertyCard from "../components/PropertyCard";
import SelectFilter from "../components/SelectFilter";
import Services from "../components/Services";
import SearchInput from "../components/SearchInput";
import "../css/home.css";

const Home = () => {
  const { property } = useContext(PropertyContext);
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedComuna, setSelectedComuna] = useState("");

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    setSelectedRegion(selectedRegion);
    setSelectedCity("");
    setSelectedComuna("");
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value || ""; // Asegurar que el valor sea una cadena vacía si es undefined
    setSelectedCity(selectedCity);
    setSelectedComuna("");
  };
  
  const handleComunaChange = (event) => {
    const selectedComuna = event.target.value || ""; // Asegurar que el valor sea una cadena vacía si es undefined
    setSelectedComuna(selectedComuna);
  };
  

  const filteredProperties = property.filter((propertyItem) => {
    const regionMatch = !selectedRegion || propertyItem.region === selectedRegion;
    const cityMatch = !selectedCity || propertyItem.city === selectedCity;
    const comunaMatch = !selectedComuna || propertyItem.comuna === selectedComuna;

    return regionMatch && cityMatch && comunaMatch;
  });

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const filteredAndSearchedProperties = filteredProperties.filter((propertyItem) =>
    propertyItem.descripcion.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main>
      <div id="parallax-world-of-ugg">
        <section>
          <div className="parallax-one">
            <h2>ENCUENTRA TU ESPACIO CON NOSOTROS</h2>
          </div>
        </section>
        <aside>
          <Services />
        </aside>
      </div>
      <section className="searchSection">
        <div className="container_inputSearch">
          <SearchInput onSearchTextChange={handleSearchTextChange} />
        </div>
        <div className="select_filter">
          <SelectFilter
            property={property}
            selectedRegion={selectedRegion}
            selectedCity={selectedCity}
            onRegionChange={handleRegionChange}
            onCityChange={handleCityChange}
            onComunaChange={handleComunaChange}
          />
        </div>
        <div className="grid_properties">
          <Grid container spacing={2}>
            {filteredAndSearchedProperties.map((propertyItem) => (
              <Grid item xs={12} sm={6} lg={4} key={propertyItem.id}>
                <PropertyCard property={propertyItem} />
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    </main>
  );
};

export default Home;
