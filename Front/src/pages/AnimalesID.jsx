import React from 'react'
import "../styles/AnimalesId.scss"
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import axios from 'axios';

const AnimalesID = () => {

  const {id} = useParams();
  const[animal, setAnimal] = useState();

  const getAnimal = async (id) => {
    const resultado = await axios.get("http://localhost:3000/animales/" + id);
    setAnimal(resultado.data);
  }

  useEffect(() => {
    getAnimal(id);
  }, []);

  return (
    <>

      {animal && (
        <div className='container_animalId'>
            <h3>{animal.numId}</h3>
            <ul className='ul_container'>
              <li>{animal.especie}</li>
              <li>{animal.edad}</li>
              <li>{animal.peso}</li>
              <li>{animal.salud}</li>
            </ul>
        </div>
      )}
    </>
  )
}

export default AnimalesID