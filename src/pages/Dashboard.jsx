import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { PropertyContext } from "../context/PropertyContext";
import { Link } from "react-router-dom";
import "../css/dashboard.css";
import PropertyCard from "../components/PropertyCard";
import { Grid } from "@mui/material";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { createProperty, property, deleteProperty } = useContext(PropertyContext);

  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [img, setImg] = useState("");
  const [direccion, setDireccion] = useState("");
  const [region, setRegion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [comuna, setComuna] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = {
      tipo,
      descripcion,
      precio,
      img,
      direccion,
      region,
      ciudad,
      comuna,
      id: Date.now(),
      user: user.email,
    };
    createProperty(newProperty);
  };
  return (
    <div className="dashboard_container">
      <h1 className="title_dashboard">CREAR NUEVA PUBLICACIÓN</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input_dashboard"
          placeholder="Tipo de Inmueble"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <input
          type="text"
          className="input_dashboard"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <input
          type="text"
          className="input_dashboard"
          placeholder="Ingrese Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="text"
          className="input_dashboard"
          placeholder="URL de imagen"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="text"
          className="input_dashboard"
          placeholder="Ingrese dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <input
          type="text"
          className="input_dashboard"
          placeholder="Región"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <input
          type="text"
          className="input_dashboard"
          placeholder="Ciudad"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        />
        <input
          type="text"
          className="input_dashboard"
          placeholder="Comuna"
          value={comuna}
          onChange={(e) => setComuna(e.target.value)}
        />
        
        <div className="btn_container">
          <button type="submit" className="btn_dashboard">Agregar</button>
        </div>
      </form>

      <Grid container spacing={2} className="newproperty_container">
      {property
        .filter((property) => property.user === user.email)
        .map((property) => (
          <Grid item key={property.id} xs={12} sm={6} md={4} lg={3}>
            <PropertyCard property={property} />
            <button onClick={() => deleteProperty(property.id)}>
                Eliminar
              </button>
          </Grid>
        ))}
    </Grid>
    </div>
  );
};

export default Dashboard;
