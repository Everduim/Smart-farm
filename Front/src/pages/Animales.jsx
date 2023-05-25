import React from "react";
import "../styles/Animales.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Animales = () => {
  const [animales, setAnimales] = useState([]);
  useEffect(() => {
    const getAnimales = async () => {
      const response = await axios.get("http://localhost:8000/animales");
      console.log(response);
      setAnimales(response);
    };
    getAnimales();
  }, []);

  return (
    <>
      <div className="container">
        {animales.map((animal) => (
          <div className="container_cards">
            <Link key={animal._id} to={` /animales/${animal._id}`}>
              <img src={animal.imagen}></img>
            </Link>
            <h3>{animal.nombre}</h3>
            <p>{animal.sexo}</p>
            <p>{animal.raza}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Animales;
