import { useContext, useState, useEffect } from "react";
import { PropertyContext } from "../context/PropertyContext";
import { FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";

export default function SelectFilter({ onRegionChange, onCityChange, onComunaChange }) {
  const { property } = useContext(PropertyContext);
  const [filteredProperties, setFilteredProperties] = useState(property);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedComuna, setSelectedComuna] = useState("");

  useEffect(() => {
    const filterProperties = () => {
      let filteredData = property;
      if (selectedRegion) {
        filteredData = filteredData.filter((item) => item.region === selectedRegion);
      }
      if (selectedCity) {
        filteredData = filteredData.filter((item) => item.city === selectedCity);
      }
      if (selectedComuna) {
        filteredData = filteredData.filter((item) => item.comuna === selectedComuna);
      }
      setFilteredProperties(filteredData);
    };

    filterProperties();
  }, [property, selectedRegion, selectedCity, selectedComuna]);

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    setSelectedRegion(selectedRegion);
    setSelectedCity("");
    setSelectedComuna("");
    onRegionChange(event);
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);
    setSelectedComuna("");
    onCityChange(event);
  };

  const handleComunaChange = (event) => {
    const selectedComuna = event.target.value;
    setSelectedComuna(selectedComuna);
    onComunaChange(event);
  };

  const regions = Array.from(new Set(property.map((item) => item.region)));
  const cities = Array.from(new Set(filteredProperties.map((item) => item.city)));
  const comunas = Array.from(new Set(filteredProperties.map((item) => item.comuna)));

  return (
    <Grid className="filter-box" container spacing={4}>
      <Grid item xs={12} md={4} lg={3}>
        <FormControl size="medium" fullWidth>
          <InputLabel id="region-label">Región</InputLabel>
          <Select
            id="region-select"
            value={selectedRegion}
            label="Región"
            onChange={handleRegionChange}
          >
            {regions.map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </Select>

        </FormControl>
      </Grid>

      <Grid item xs={12} md={4} lg={3}>
        <FormControl size="medium" fullWidth>
          <InputLabel id="city-label">Ciudad</InputLabel>
          <Select
            id="city-select"
            value={selectedCity}
            label="Ciudad"
            onChange={handleCityChange}
            disabled={!selectedRegion}
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>

        </FormControl>
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <FormControl size="medium" fullWidth>
          <InputLabel id="comuna-label">Comuna</InputLabel>
          <Select
            id="comuna-select"
            value={selectedComuna}
            label="Comuna"
            onChange={handleComunaChange}
            disabled={!selectedCity}
          >
            {filteredProperties
              .filter((item) => item.city === selectedCity)
              .map((propertyItem) => (
                // <MenuItem key={propertyItem.comuna} value={propertyItem.comuna}>
                //   {propertyItem.comuna}
                // </MenuItem>
                <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar variant="circular" aria-label="recipe">
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={property.tipo}
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="194" image={property.img} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {property.region}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <span onClick={handleFavButtonClick}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon color={isPropertyInFavorites ? 'error' : 'inherit'} />
          </IconButton>
        </span>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Detalle:</Typography>
          <Typography paragraph>Propiedad en {property.ciudad}</Typography>
          <Typography paragraph>Ubicada en la comuna de {property.comuna}</Typography>
          <Typography paragraph>{property.descripcion}</Typography>
        </CardContent>
      </Collapse>
    </Card>
                
              ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}  