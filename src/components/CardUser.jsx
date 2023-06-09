import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../context/UserContext";
import "../css/cardUser.css";

export default function CardUser() {
  const userData = useContext(UserContext);
  const { user } = userData;
  const [photo, setPhoto] = useState(user.photo);

  useEffect(() => {
    // Al cargar el componente, intenta obtener la foto del almacenamiento local
    const savedPhoto = localStorage.getItem('userPhoto');
    if (savedPhoto) {
      setPhoto(savedPhoto);
    }
  }, []);

  const handlePhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPhoto = e.target.result;
        setPhoto(newPhoto);
        // Guarda la nueva foto en el almacenamiento local
        localStorage.setItem('userPhoto', newPhoto);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="card_container">
      <div className="card_user">
        <div className="card-top-part">
          <div className="left-part">
            <div className="user-data">
              <p className="name">Nombre: {user.name.toUpperCase()}</p>
              <p className="role">Correo: {user.email}</p>
            </div>
            <div className="user-position">
              <h3 className="position">Fono: {user.phone}</h3>
            </div>
          </div>
          <div className="right-part">
            <div className="user-photo">
              <img src={photo || user.photo || user.img} className="photo" alt="User Photo" />
            </div>
            <input className="input_user" type="file" onChange={handlePhotoChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
