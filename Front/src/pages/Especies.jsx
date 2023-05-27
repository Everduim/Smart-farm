import "../styles/Animales.scss";
import  { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Especies = () => {
  const [especies, setEspecies] = useState([]);
  useEffect(() => {
    const getEspecies = async () => {
      const response = await axios.get("http://localhost:4000/especies");
      console.log(response);
      // const animalesSet = []
      // for(let i = 0; i<20; i++){
      //   animalesSet.push(response.data[0])
      // }
      setEspecies(response.data);
    };
    getEspecies();
  }, []);

  return (
    <>
      <div className="container">
        {especies.map((especie) => (
          <div key={especie._id} className="container_cards">
            <Link to={`/ejemplares/${especie._id}`}>
              <img src={especie.imagen}></img>
            </Link>
            <h3>{especie.nombre}</h3>
            <p>{especie.sexo}</p>
            <p>{especie.raza}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Especies;
