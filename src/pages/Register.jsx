import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../css/register.css";

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
          <h1>Register</h1>
          <div className="">
            <form className="login-form__input" onSubmit={handleSubmit}>
              <input
                className="input_login"
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="input_login"
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="input_login"
                type="tel"
                placeholder="Fono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                className="input_login"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="input_login"
                type="password"
                placeholder="Confirme contraseña"
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
              />
              <button className="login-form__button" type="submit">
                Registrar
              </button>
            </form>
          </div>
        </div>
        <div className="cube-container">
          <div className="cube"></div>
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
