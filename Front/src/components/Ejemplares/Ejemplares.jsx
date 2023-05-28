import "./Ejemplares.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const EjemplaresA = () => {
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
    try {
      // primero borror de bd
      await axios.delete(`http://localhost:4000/ejemplar/${ejemplar._id}`)
      // si todo ha ido bien ( es decir, no salgo al catch y sigo en el try)
      // quitas tambien el ejemplar del useState
      setEjemplares(ejemplares.filter(x => x._id !== ejemplar._id))
    } catch (e) {
      console.log(e)
    }

  }

  return (
    <>
      {ejemplares.map((ejemplar) => {
        return (
          <div key={ejemplar._id} className="container_animalId">
            <img src={ejemplar.especie.imagen} ></img>
            <h3>Identificador: {ejemplar.identificador}</h3>
            <ul className="ul_container">
              
              <li>{ejemplar.edad} años</li>
              <li>{ejemplar.peso}Kg</li>
              <li>{ejemplar.salud}</li>
              <li>Nombre: {ejemplar.especie.nombre}</li>
              <li>Raza: {ejemplar.especie.raza} </li>
              <li>Sexo:{ejemplar.especie.sexo}</li>
              <li><small>Id: {ejemplar._id}</small></li>
            </ul>
            <div className="buttons_container">
              <button onClick={() => tryEliminar(ejemplar)}>ELIMINAR</button>
              <Link to={`/ejemplar/${ejemplar._id}`}>
                <button >EDITAR</button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EjemplaresA;
