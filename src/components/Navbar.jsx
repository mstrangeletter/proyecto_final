import { ThemeProvider, createTheme, AppBar, Button, Drawer, Toolbar, Typography, Badge, IconButton } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import "../css/navbar.css";

// const navLinks = [
//   {
//     title: "Home",
//     path: "#",
//     icon: <HomeIcon />
//   },
//   {
//     title: "Login",
//     path: "#login",
//     icon: <Person2Icon />,
//   },
//   {
//     title: "Register",
//     path: "#register",
//     icon: <MenuIcon />,
//   },
//   {
//     title: "Profile",
//     path: "#Profile",
//     icon: <AccountCircleIcon />,
//   },
//   {
//     title: "Favorites",
//     path: "#Favorites",
//     icon: <FavoriteIcon />,
//   },
//   {
//     title: "Update",
//     path: "#Update",
//     icon: <MenuIcon />,
//   },
//   {
//     title: "Dashboard",
//     path: "#Dashboard",
//     icon: <NoteAddIcon />,
//   },
  
// ];

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
        <AppBar
          sx={{ width: "100%"}}
          position="static"
          color="neutral">
          <Toolbar>
            <Typography className="title" variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Harmoni <span className="mark_prop">Prop</span>
            </Typography>
            <NavLink exact to="/" style={{ color: "white" }}>
              <IconButton color="inherit">
                <HomeIcon />
              </IconButton>
            </NavLink>

            {user ? (
              <>
             {/* {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component="a"
                href={item.path}
              >
                {item.title}
              </Button>
            ))} */}
                <NavLink to="/dashboard" style={{ color: "white" }}>
                  
                  <IconButton color="inherit">
                    <NoteAddIcon />
                  </IconButton>
                </NavLink>
                <NavLink to="/profile" style={{ color: "white" }}>
                  <Button color="inherit">
                    <AccountCircleIcon />
                  </Button>
                </NavLink>
                <NavLink to="/favorites" style={{ color: "white" }}>
                  <IconButton color="inherit" >
                    <Badge badgeContent={favorites.length} color="error">
                      <FavoriteIcon />
                    </Badge>
                  </IconButton>
                </NavLink>
                <NavLink to="/carrito" style={{ color: "white" }}>
                  <IconButton color="inherit" >
                    <Badge badgeContent={favorites.length} color="error">

                    </Badge>
                  </IconButton>
                </NavLink>
                <IconButton color="inherit" onClick={logout} style={{ color: "white" }}>
                  <LogoutIcon />
                </IconButton>
              </>
            ) : (
              <>
                <NavLink to="/login" style={{ color: "white" }}>
                  <Button color="inherit">
                    <Person2Icon />
                  </Button>
                </NavLink>
                <NavLink to="/register" style={{ color: "white" }}>
                  <IconButton color="inherit">
                    <PersonAddIcon />
                  </IconButton>
                </NavLink>
                <IconButton
                color="inherit"
                size="large"
                >
                  <MenuIcon />
                </IconButton>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      {/* <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
      >
        <NavListDrawer
        navLinks={navLinks}
        />
      </Drawer> */}
    </div>
  );
};
