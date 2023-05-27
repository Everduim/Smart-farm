import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { JwtContext } from "../../context/jwtContext";
import "./EditarEjemplarForm.scss";
import Especies from "../../pages/Especies";

const NuevoEjemplar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ejemplar, setEjemplar] = useState(null);
  const { token } = useContext(JwtContext);
  const [especies, setEspecies] = useState([]);

  const getEjemplar = async (id) => {
    const resultado = await axios.get(
      `http://localhost:4000/ejemplar/${id}?token=${token}`
    );
    setEjemplar(resultado.data);
  };

  const getEspecies = async () => {
    const resultado = await axios.get("http://localhost:4000/especies");
    setEspecies(resultado.data);
  };

  useEffect(() => {
    getEjemplar(id);
    getEspecies();
  }, []);

  async function tryActualizar(ejemplar, event) {
    event.preventDefault();

    try {
      await axios.put(
        `http://localhost:4000/ejemplar/${ejemplar._id}`,
        ejemplar
      );
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
            <select
              value={ejemplar.especie.nombre}
              onChange={(e) =>
                setEjemplar({
                  ...ejemplar,
                  especie: { ...ejemplar.especie, nombre: e.target.value },
                })
              }
            >
              <option value="">Seleccione una especie</option>
              {especies.map((especie) => (
                <option key={especie._id} value={especie.nombre}>
                  {especie.nombre}
                </option>
              ))}
            </select>

            <select
              value={ejemplar.especie.sexo}
              onChange={(e) =>
                setEjemplar({
                  ...ejemplar,
                  especie: { ...ejemplar.especie, sexo: e.target.value },
                })
              }
            >
              <option value="">Seleccione el sexo</option>
              {especies.map((especie) => (
                <option key={especie._id} value={especie.sexo}>
                  {especie.sexo}
                </option>
              ))}
            </select>

            <select
              value={ejemplar.especie.raza}
              onChange={(e) =>
                setEjemplar({
                  ...ejemplar,
                  especie: { ...ejemplar.especie, raza: e.target.value },
                })
              }
            >
              <option value="">Seleccione la raza</option>
              {especies.map((especie) => (
                <option key={especie._id} value={especie.raza}>
                  {especie.raza}
                </option>
              ))}
            </select>

            <button onClick={(e) => tryActualizar(ejemplar, e)}>
              Actualizar
            </button>
            <Link to="/especies">
              <button>Cancelar</button>
            </Link>
          </form>
        </div>
      )}
    </>
  );
};

export default NuevoEjemplar;
