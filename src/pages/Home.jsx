import React, { useContext, useState, useEffect } from "react";
import { PropertyContext } from "../context/PropertyContext";
import { Grid } from "@mui/material";
import PropertyCard from "../components/PropertyCard";
import SelectFilter from "../components/SelectFilter";
import Services from "../components/Services";
import "../css/home.css";

const Home = () => {
  const { property } = useContext(PropertyContext);
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedComuna, setSelectedComuna] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    setSelectedRegion(selectedRegion);
    setSelectedCity("");
    setSelectedComuna("");
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value || "";
    setSelectedCity(selectedCity);
    setSelectedComuna("");
  };

  const handleComunaChange = (event) => {
    const selectedComuna = event.target.value || "";
    setSelectedComuna(selectedComuna);
  };

  useEffect(() => {
    const filteredProperties = property.filter((propertyItem) => {
      const regionMatch = !selectedRegion || propertyItem.region === selectedRegion;
      const cityMatch = !selectedCity || propertyItem.city === selectedCity;
      const comunaMatch = !selectedComuna || propertyItem.comuna === selectedComuna;

      const filterLocation = regionMatch && cityMatch && comunaMatch;
      const filterText = propertyItem.descripcion.toLowerCase().includes(searchText.toLocaleLowerCase());
      return filterLocation && filterText;    
    });

    setFilteredProperties(filteredProperties);
  }, [property, selectedRegion, selectedCity, selectedComuna]);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
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
          {/* <SearchInput onSearchTextChange={handleSearchTextChange} /> */}
          <input type="text" name="search" placeholder="Buscar" className="input_search" value={searchText} onChange={handleSearchTextChange} />

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
