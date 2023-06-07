import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";


import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserContext.jsx";
import PropertyProvider from "./context/PropertyContext.jsx";
import FavoritesProvider from "./context/FavoritesContext.jsx";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <PropertyProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FavoritesProvider>
      </PropertyProvider>
    </UserProvider>
  </React.StrictMode>
);
