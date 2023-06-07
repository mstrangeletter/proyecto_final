import React, { createContext, useEffect, useState } from "react";

export const PropertyContext = createContext();

const initialPropertyState = localStorage.getItem("property")
  ? JSON.parse(localStorage.getItem("property"))
  : [];

const PropertyProvider = ({ children }) => {
  const [property, setProperty] = useState(initialPropertyState);
  const [regions, setRegions] = useState([]);
  const [cities, setCities] = useState([]);
  const [communes, setCommunes] = useState([]);

  const getProperties = async () => {
    const res = await fetch("./realState.json");
    const data = await res.json();
    setProperty(data);
  };

  useEffect(() => {
    if (property.length === 0) {
      getProperties();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("property", JSON.stringify(property));
    const uniqueRegions = Array.from(new Set(property.map((propertyItem) => propertyItem.region)));
    setRegions(uniqueRegions);
  }, [property]);

  useEffect(() => {
    const uniqueCities = Array.from(new Set(property.map((propertyItem) => propertyItem.city)));
    setCities(uniqueCities);
  }, [property]);

  useEffect(() => {
    const uniqueCommunes = Array.from(new Set(property.map((propertyItem) => propertyItem.comuna)));
    setCommunes(uniqueCommunes);
  }, [property]);

  useEffect(() => {
    localStorage.setItem("property", JSON.stringify(property));
  }, [property]);

  const createProperty = (newProperty) => {
    setProperty([newProperty, ...property]);
  };

  const deleteProperty = (id) => {
    const newProperties = property.filter((prop) => prop.id !== id);
    setProperty(newProperties);
  };

  const updateProperty = (updatedProperty) => {
    const updatedProperties = property.map((prop) => {
      if (prop.id === updatedProperty.id) {
        return updatedProperty;
      }
      return prop;
    });

    setProperty(updatedProperties);
  };

  return (
    <PropertyContext.Provider
      value={{ property, regions, cities, communes, createProperty, deleteProperty, updateProperty }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
