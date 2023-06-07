import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import ContactMailIcon from "@mui/icons-material/ContactMail";


export default function NavListDrawer({ onClose }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "300px",
        height: "100vh"
      }}
    >
      <nav
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <List sx={{ display: "flex", flexDirection: "column" }}>
          <Divider />
          <ListItem
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
              minWidth: "200px",
              margin:"1rem",
              gap:"1rem"
            }}
            
            button
            onClick={onClose}
            component={Link}
            to="/"
          >
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
              minWidth: "200px",
              margin:"1rem",
              gap:"1rem"
            }}
          
            button
            onClick={onClose}
            component={Link}
            to="/Proyects"
          >
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Proyectos" />
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
              minWidth: "200px",
              margin:"1rem",
              gap:"1rem"
            }}
            
            button
            onClick={onClose}
            component={Link}
            to="/Contact"
          >
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contacto" />
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
