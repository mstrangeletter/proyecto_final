import Swal from "sweetalert2";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import SearchInput from "../components/SearchInput";

export default function Login() {
  const { users, login } = useContext(UserContext);
  const [userLogin, setUserLogin] = useState({});
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const loginUser = () => {
    if (!userLogin.email && !userLogin.password) {
      alert("Ingrese Credenciales");
    } else {
      let searchUser = users.find((u) => u.email === userLogin.email);
      if (searchUser !== undefined) {
        if (searchUser.password === userLogin.password) {
          navigate("/");
        } else {
          alert("Contraseña incorrecta");
        }
      } else {
        alert("Correo no está registrado");
      }
    }
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
        
            <form className="login-form__input" onSubmit={handleSubmit}>
              <input
                className="input_login"
                type="text"
                placeholder="Ingrese correo"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
              {error && <div className=""></div>}
              <input
                className="input_login"
                type="password"
                placeholder="Ingrese contraseña"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <button
                onClick={loginUser}
                className="login-form__button"
                type="submit"
              >
                Acceder
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
}
