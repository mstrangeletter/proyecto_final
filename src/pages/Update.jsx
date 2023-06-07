import { useContext, useEffect, useState } from "react";
import { PropertyContext } from "../context/PropertyContext";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Update = () => {
  const { id } = useParams();
  const { property, updateProperty } = useContext(PropertyContext);
  const { user } = useContext(UserContext);

  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    const findProperty = property.find((item) => item.id === parseInt(id));
    setTipo(findProperty.tipo);
    setDescripcion(findProperty.descripcion);
    setPrecio(findProperty.precio);
    setImg(findProperty.img);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = {

      id: parseInt(id),
      realstate,
      Mts,
      Precio,
      tipo,
      direccion,
      descripcion,
      img,
      user: user.email,



    };
    updateProperty(newProperty);
    console.log("editado");
  };

  return (
    <div>
      <h1>Actualizar producto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="text"
          placeholder="price"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <input
          type="text"
          placeholder="img url"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};
export default Update;
