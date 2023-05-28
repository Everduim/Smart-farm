import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { JwtContext } from "../../context/jwtContext";
import "./NuevoEjemplar.scss"

const NuevoEjemplar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ejemplar, setEjemplar] = useState({
    identificador: "",
    edad: "",
    peso: "",
    salud: "",
    especie: "",
  });
  const { token } = useContext(JwtContext);
  const [especies, setEspecies] = useState([]);
  const [sexos, setSexos] = useState([]);
  const [razas, setRazas] = useState([]);

  const getEspecies = async () => {
    try {
      const resultado = await axios.get("http://localhost:4000/especies");
      setEspecies(resultado.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSexosYRazas = (especieId) => {
    const especieSeleccionada = especies.find((especie) => especie._id === especieId);
    if (especieSeleccionada) {
      setSexos([especieSeleccionada.sexo]);
      setRazas([especieSeleccionada.raza]);
    }
  };

  useEffect(() => {
    getEspecies();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEjemplar((prevEjemplar) => ({
      ...prevEjemplar,
      [name]: value,
    }));

    if (name === "especie") {
      getSexosYRazas(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:4000/ejemplar", ejemplar, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEjemplar({
        identificador: "",
        edad: "",
        peso: "",
        salud: "",
        especie: "",
      });
      navigate("/especies"); // Redirigir a la página de "Especies"
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {especies.length > 0 && (
        <div className="container_ejemplar">
          <form className="animal_form" onSubmit={handleSubmit}>
            {/* Resto del formulario */}
            <input
              type="text"
              name="identificador"
              value={ejemplar.identificador}
              onChange={handleInputChange}
              placeholder="Identificador"
            />
            <input
              type="text"
              name="edad"
              value={ejemplar.edad}
              onChange={handleInputChange}
              placeholder="Edad"
            />
            <input
              type="text"
              name="peso"
              value={ejemplar.peso}
              onChange={handleInputChange}
              placeholder="Peso"
            />
            <input
              type="text"
              name="salud"
              value={ejemplar.salud}
              onChange={handleInputChange}
              placeholder="Salud"
            />
            <select
              name="especie"
              value={ejemplar.especie}
              onChange={handleInputChange}
            >
              <option value="">Seleccione una especie</option>
              {especies.map((especie) => (
                <option key={especie._id} value={especie._id}>
                  {especie.nombre}
                </option>
              ))}
            </select>
            <select
              name="sexo"
              value={ejemplar.sexo}
              onChange={handleInputChange}
            >
              <option value="">Seleccione el sexo</option>
              {sexos.map((sexo) => (
                <option key={sexo} value={sexo}>
                  {sexo}
                </option>
              ))}
            </select>
            <select
              name="raza"
              value={ejemplar.raza}
              onChange={handleInputChange}
            >
              <option value="">Seleccione la raza</option>
              {razas.map((raza) => (
                <option key={raza} value={raza}>
                  {raza}
                </option>
              ))}
            </select>
            <button type="submit">Insertar</button>
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
