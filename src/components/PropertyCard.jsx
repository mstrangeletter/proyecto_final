import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PropertyContext } from "../context/PropertyContext";
import { FavoritesContext } from "../context/FavoritesContext";
import { UserContext } from "../context/UserContext";
import "../assets/whatsapp.png";

// Estilos personalizados para el botón de expandir/colapsar
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const openWhatsApp = () => {
  const phoneNumber = '56982248448';
  const url = `https://wa.me/${phoneNumber}`;

  window.open(url, '_blank');
};

const PropertyCard = ({ property }) => {
  const [expanded, setExpanded] = React.useState(false);
  const { addFavorite, deleteFavorite, favorites } = useContext(FavoritesContext);
  const { data } = useContext(UserContext);

  const isPropertyInFavorites = favorites.some((item) => item.id === property.id);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavButtonClick = () => {
    if (!isPropertyInFavorites) {
      addFavorite(property);
    } else {
      deleteFavorite(property.id);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <MapsHomeWorkIcon variant="circular" aria-label="recipe">
            
          </MapsHomeWorkIcon>
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
          <WhatsAppIcon 
          onClick={openWhatsApp}
          color="success" />
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
  );
};

export default PropertyCard;
