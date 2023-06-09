import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { PropertyContext } from "../context/PropertyContext";
import PropertyCard from "../components/PropertyCard";
import SelectRegion from "../components/SelectRegions";
import { Button, Grid, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import "../css/dashboard.css";

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

      <div className="form_container">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="outlined-required"
                label="Tipo de Inmueble"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <OutlinedInput
                required
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="outlined-required"
                label="URL de Imágen"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="outlined-required"
                label="Ingrese dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Descripción"
                multiline
                rows={4}
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectRegion value={region} onChange={(e) => setRegion(e.target.value)} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="outlined-required"
                label="Ciudad"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="outlined-required"
                label="Comuna"
                value={comuna}
                onChange={(e) => setComuna(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleSubmit}>
                Agregar
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>

      <div className="create_card">
        <Grid container spacing={2} className="newproperty_container">
          {property
            .filter((property) => property.user === user.email)
            .map((property) => (
              <Grid item key={property.id} xs={12} sm={6} md={4} lg={3}>
                <PropertyCard property={property} />
                <Button variant="text" onClick={() => deleteProperty(property.id)}>
                  Eliminar
                </Button>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
