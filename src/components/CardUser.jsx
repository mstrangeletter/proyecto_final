import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { UserContext } from "../context/UserContext";
import "../css/cardUser.css";

export default function CardUser() {
    const userData = useContext(UserContext)
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
        <div className='card_container'>

            <div className="card_user">
                <div className="card-top-part">
                    <div className="left-part">
                        <div className="user-data">
                            <div>
                            <p className="name">Usuario: {user.name.toUpperCase()}</p>

                            </div>
                            <div>
                            <p className="role"> Correo: {user.email} </p>

                            </div>
                        </div>
                        <div className="user-position">
                            <h3 className="position">
                            Fono: {user.phone}
                            </h3>
                        </div>
                    </div>
                    <div className="right-part">
                        <div className="user-photo">
                            <img src= {photo || user.photo} className="photo" alt="User Photo"/>
                        </div>
                        <input className="input_user"type="file" onChange={handlePhotoChange} />
                    </div>
                </div>
                <div className="card-bottom-part">
                    <div className="bottom-part">
                        <a href="mailto: example@example.com" className="link">
                            <span className="icon">
                                <svg viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-name="20" id="_20">
                                    <path transform="translate(1.25 3.75)" d="M16.25,12.5h-15A1.252,1.252,0,0,1,0,11.25v-10A1.252,1.252,0,0,1,1.25,0h15A1.251,1.251,0,0,1,17.5,1.25v10A1.251,1.251,0,0,1,16.25,12.5ZM1.25,1.819V11.25h15V1.819L9.106,6.763a.626.626,0,0,1-.713,0ZM2.625,1.25,8.75,5.487,14.875,1.25Z" id="Fill"></path>
                                </svg>
                            </span>
                            Email
                        </a>
                    </div>
                    <div className="bottom-part">
                        <a href="tel: 0123456789" className="link">
                            <span className="icon">
                                <svg viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-name="20" id="_20">
                                    <path transform="translate(1.869 1.875)" d="M14.381,16.25h-.106C2,15.544.249,5.179.006,2.019A1.874,1.874,0,0,1,1.731,0H5.175A1.243,1.243,0,0,1,6.337.787l.95,2.337a1.247,1.247,0,0,1-.275,1.35L5.681,5.818a5.875,5.875,0,0,0,4.738,4.75l1.356-1.344a1.25,1.25,0,0,1,1.356-.257l2.356.944a1.245,1.245,0,0,1,.769,1.163v3.3A1.877,1.877,0,0,1,14.381,16.25Zm-12.5-15a.625.625,0,0,0-.625.625v.05C1.545,5.648,3.4,14.375,14.343,15h.038a.625.625,0,0,0,.625-.589V11.075l-2.356-.944-1.794,1.781-.3-.038A6.733,6.733,0,0,1,5.429,8.553,8.171,8.171,0,0,1,4.381,5.7l-.038-.3L6.118,3.606,5.181,1.25Z" id="Fill"></path>
                                </svg>
                            </span>
                            Phone
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

