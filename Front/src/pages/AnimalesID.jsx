import "../styles/AnimalesId.scss";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AnimalesID = () => {
  const { id } = useParams();
  const [ejemplares, setEjemplares] = useState([]);

  const getEjemplares = async (id) => {
    const resultado = await axios.get(
      `http://localhost:4000/ejemplar?especie=${id}`
    );
    console.log(resultado.data)
    setEjemplares(resultado.data);
  };

  useEffect(() => {
    getEjemplares(id);
  }, []);

  async function tryEliminar(ejemplar) {
    try{
      // primero borror de bd
      await axios.delete(`http://localhost:4000/ejemplar/${ejemplar._id}`)
      // si todo ha ido bien ( es decir, no salgo al catch y sigo en el try)
      // quitas tambien el ejemplar del useState
      setEjemplares(ejemplares.filter(x=>x._id !==  ejemplar._id))
    }catch(e){
      console.log(e)
    }
   
  }

  return (
    <>
      {ejemplares.map((ejemplar) => {
        return (
          <div className="container_animalId">
            <h3>{ejemplar.identificador}</h3>
            <ul className="ul_container">
              <li>{ejemplar.especie.nombre} -  {ejemplar.especie.raza} - {ejemplar.especie.sexo}</li>
              <li>{ejemplar.edad}</li>
              <li>{ejemplar.peso}</li>
              <li>{ejemplar.salud}</li>
              <li><small>{ejemplar._id}</small></li>
            </ul>
            <button onClick={()=>tryEliminar(ejemplar)}>x</button>
          </div>
        );
      })}
    </>
  );
};

export default AnimalesID;
