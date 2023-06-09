import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../css/register.css";
import { TextField } from "@mui/material";

const Register = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repassword) {
      return alert("No coinciden las contraseñas");
    }

    const user = register({
      name,
      email,
      phone,
      password,
      id: Date.now(),
    });

    if (user) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El email ya está registrado",
      });
    }

    navigate("/dashboard");
  };

  return (
    <main>
      <div className="hero">
        <div className="container_hero">
          <h1>Registro</h1>
          <div className="">
            <form className="login-form__input" onSubmit={handleSubmit}>
              <TextField
                required
                id="filled-required"
                label="Nombre"
                value={name}
                variant="filled"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                required
                id="filled-required"
                label="Correo"
                value={email}
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <TextField
                required
                type="password"
                id="filled-required"
                label="Contraseña"
                value={password}
                variant="filled"
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                required
                type="password"
                id="filled-required"
                label="Reingrese Contraseña"
                value={repassword}
                variant="filled"
                onChange={(e) => setRepassword(e.target.value)}
              />
              
              <TextField
                required
                id="filled-required"
                label="Ingrese Fono"
                value={phone}
                variant="filled"
                onChange={(e) => setPhone(e.target.value)}
              />
             
              <button className="login-form__button" type="submit">
                Registrar
              </button>
              <div className="about_pass">
                <p>
                  La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula y un número
                </p>
              </div>
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
};

export default Register;
