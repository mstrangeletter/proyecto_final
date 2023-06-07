import { ThemeProvider, createTheme, AppBar, Button, Drawer, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import "../css/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);


  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#0C134F',
        contrastText: '#fff',
      },
    }
  });
  const { user, logout } = useContext(UserContext);
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="navbar">
      <ThemeProvider theme={theme}>
        <AppBar sx={{
          width:"100%"
        }} position="static" color="neutral">
          <Toolbar>
            <Typography className="title" variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Harmoni <span className="mark_prop">Prop</span>
            </Typography>
            <NavLink exact to="/" style={{ color: "white" }}>
              <Button color="inherit">Home</Button>
            </NavLink>

            {user ? (
              <>
                <NavLink to="/dashboard" style={{ color: "white" }}>
                  <Button color="inherit">Dashboard</Button>
                </NavLink>
                <NavLink to="/profile" style={{ color: "white" }}>
                  <Button color="inherit">Profile</Button>
                </NavLink>
                <NavLink to="/favorites" style={{ color: "white" }}>
                  <Button color="inherit">
                    Favoritos ({favorites.length})
                  </Button>
                </NavLink>
                <Button color="inherit" onClick={logout} style={{ color: "white" }}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <NavLink to="/login" style={{ color: "white" }}>
                  <Button color="inherit">Login</Button>
                </NavLink>
                <NavLink to="/register" style={{ color: "white" }}>
                  <Button color="inherit">Register</Button>
                </NavLink>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
      >
        <NavListDrawer />
      </Drawer>
    </div>
  );
};
