import React from 'react';
import "../css/services.css";

export default function Services() {
  return (
    <section className='section'>
      <div className="iconContainer">
        <div className="service">
          <div className="buyIcon"></div>
          <div className='text'>
            <p>
              Encuentra tu hogar ideal en nuestro sitio. Tenemos una amplia selección de propiedades: apartamentos acogedores, casas familiares espaciosas. ¡No pierdas la oportunidad! Haz clic y busca tu nuevo hogar ahora.</p>
          </div>
        </div>
        <div className="service">
          <div className="soldIcon"></div>
          <div className='text'>
            <p>Vende tu propiedad rápido y al mejor precio. Publica fácilmente en nuestro sitio y alcanza a una amplia audiencia de compradores. ¡Publica hoy y recibe ofertas!</p>
          </div>
        </div>
        <div className="service">
          <div className="rentIcon"></div>
          <div className='text'>
            <p>Encuentra tu hogar perfecto sin complicaciones. Explora nuestro servicio de alquiler y descubre una amplia selección de propiedades. ¡Disfruta de una vida cómoda y sin preocupaciones en tu nuevo hogar!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
