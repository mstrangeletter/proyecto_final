import React from 'react'
import "../css/cardDashboard.css";
import { PropertyContext } from '../context/PropertyContext';

export default function CardDashboard() {

    return (
        <div className='dashboard'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="img url"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />
                <button type="submit">Agregar</button>
            </form>


        </div>
    )
}

