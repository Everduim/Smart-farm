import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { JwtContext } from "../../context/jwtContext";
import "./EditarEjemplarForm.scss";


const EditarEjemplarForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ejemplar, setEjemplar] = useState(null);
  const { token } = useContext(JwtContext);
  console.log(id);

  const getEjemplar = async (id) => {
    const resultado = await axios.get(
      `http://localhost:4000/ejemplar/${id}?token=${token}`
    );
    console.log(resultado.data);
    setEjemplar(resultado.data);
  };

  useEffect(() => {
    getEjemplar(id);
  }, []);

  async function tryActualizar(ejemplar, event) {
    event.preventDefault();

    try {
      await axios.put(`http://localhost:4000/ejemplar/${ejemplar._id}`, ejemplar);
      setEjemplar(null);
      navigate("/especies"); // Redirigir a la página de "Especies"
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      {ejemplar !== null && (
        <div key={ejemplar._id} className="container_ejemplar">
          <form className="animal_form">
            <img className="imagen_a" src={ejemplar.especie.imagen} alt="" />
            <ul className="inputs-ul">
              <li className="input-li">
                <small>Identificador:</small>
                <input
                  value={ejemplar.identificador}
                  onChange={(e) =>
                    setEjemplar({ ...ejemplar, identificador: e.target.value })
                  }
                ></input>
              </li>
              <li>
                <small>Edad: </small>
                <input
                  value={ejemplar.edad}
                  onChange={(e) =>
                    setEjemplar({ ...ejemplar, edad: e.target.value })
                  }
                ></input>
              </li>
              <li>
                <small>Peso: </small>
                <input
                  value={ejemplar.peso}
                  onChange={(e) =>
                    setEjemplar({ ...ejemplar, peso: e.target.value })
                  }
                ></input>
              </li>
              <li>
                <small>Salud: </small>
                <input
                  value={ejemplar.salud}
                  onChange={(e) =>
                    setEjemplar({ ...ejemplar, salud: e.target.value })
                  }
                ></input>
              </li>
              <li>
                {ejemplar.especie.nombre} - {ejemplar.especie.raza} -{" "}
                {ejemplar.especie.sexo}
              </li>
            </ul>
            <button onClick={(e) => tryActualizar(ejemplar, e)}>Actualizar</button>
            <Link to="/especies">
              <button>Cancelar</button>
            </Link>
            
          </form>
        </div>
      )}
    </>
  );
};

export default EditarEjemplarForm;
