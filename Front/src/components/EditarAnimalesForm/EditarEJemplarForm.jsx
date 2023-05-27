// import "../styles/AnimalesId.scss";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { JwtContext } from "../../context/jwtContext";

const EditarEjemplarForm = () => {
  const { id } = useParams();
  const [ejemplar, setEjemplar] = useState(null);
  const {token} = useContext(JwtContext)
  console.log(id)

  const getEjemplar = async (id) => {
    const resultado = await axios.get(
      `http://localhost:4000/ejemplar/${id}?token=${token}`
    );
    console.log(resultado.data)
    setEjemplar(resultado.data);
  };

  useEffect(() => {
    getEjemplar(id);
  }, []);


  return (
    <>
           {ejemplar !== null && (
        <div key={ejemplar._id} className="container_animalId">
          <h3>{ejemplar.identificador}</h3>
          <ul className="ul_container">
            <li>
              {ejemplar.especie.nombre} - {ejemplar.especie.raza} -{" "}
              {ejemplar.especie.sexo}
            </li>
            <li>{ejemplar.edad}</li>
            <li>{ejemplar.peso}</li>
            <li>{ejemplar.salud}</li>
            <img src={ejemplar.especie.imagen} alt="" />
            <li>
              <small>{ejemplar._id}</small>
            </li>
          </ul>
          <Link to={`/animalesid/${ejemplar.especie._id}`}>
            <button type="submit"></button>
          </Link>
        </div>
      )}

    </>
  );
};

export default EditarEjemplarForm;
