import "../styles/Animales.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Animales = () => {
  const [animales, setAnimales] = useState([]);
  useEffect(() => {
    const getAnimales = async () => {
      const response = await axios.get("http://localhost:4000/especies");
      console.log(response);
      // const animalesSet = []
      // for(let i = 0; i<20; i++){
      //   animalesSet.push(response.data[0])
      // }
      setAnimales(response.data);
    };
    getAnimales();
  }, []);

  return (
    <>
      <div className="container">
        {animales.map((animal) => (
          <div key={animal._id} className="container_cards">
            <Link to={`/animales/${animal._id}`}>
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
