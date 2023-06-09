import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import CardUser from "../components/CardUser";
import Swal from "sweetalert2";
import "../css/profile.css";

const Profile = () => {
  const { user, updateUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setName(user.name);
    setPhone(user.phone);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
      name: name,
      phone: phone,
    };

    updateUser(updatedUser);

    Swal.fire("Datos actualizados");

    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Profile</h1>
      <CardUser />
      <div>
      <button className="btn_modificaprofile" onClick={openModal}>Modificar datos</button>
      </div>
 
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="phone">Teléfono:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="modal-buttons">
                <button type="submit">Guardar</button>
                <button onClick={closeModal}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
