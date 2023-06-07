import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Update from "./pages/Update";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/favorites"
          element={user ? <Favorites /> : <Navigate to="/login" />}
        />
        <Route
          path="/update/:id"
          element={user ? <Update /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />

      {/* Modal */}
    </div>
  );
};
export default App;
