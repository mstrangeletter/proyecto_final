import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false);

    if (!email.trim()) {
      setError(true);
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Falta llenar el email",
      });
    }

    const user = login(email, password);
    if (user) {
      setEmail("");
      setPassword("");
      return navigate("/dashboard");
    }
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Credenciales incorrectas",
    });
  };

  return (
    <main>
      <div className="hero">
        <div className="hero__title">
          <div className="container_hero">
            <h1>Login</h1>

            <form onSubmit={handleSubmit}className="login-form__input">
              <TextField
                sx={{ color: "white" }}
                id="email"
                label="Ingrese Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
              />

              <TextField
                id="password"
                label="Ingrese Password"
                value={password}
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                size="large"
                onClick={handleSubmit}
                variant="contained"
              >
                Acceder
              </Button>
            </form>
          </div>
        </div>
        <div className="cube-container">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
        </div>
      </div>
    </main>
  );
}
