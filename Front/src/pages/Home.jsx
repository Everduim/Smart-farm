import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="containerhome">
      <div className="texto-home">
        <h1 className="cabecera">
          ¡Hola somos{" "}
          <Link className="cabecera_Link" to="/about">
            {" "}
            "Smart Farm" !
          </Link>
        </h1>
        <h3 className="cabecera1">
          ¡Bienvenido a Smart Farm, la aplicación definitiva diseñada para
          simplificar y optimizar tus operaciones ganaderas!
        </h3>

        <p className="texto1">
          Realiza un seguimiento detallado de cada animal, incluyendo su salud,
          alimentación y otros datos relevantes. Programa recordatorios y
          alertas para garantizar un cuidado oportuno y adecuado de tus
          animales.
        </p> 
        <p className="texto2"> Lleva un registro exhaustivo de tratamientos médicos,
          vacunas y otros procedimientos de salud. Gestiona eficientemente el
          inventario de alimentos y suministros para optimizar los recursos.</p> 

        <h3 className="texto4">
          Descarga Smart Farm hoy mismo y simplifica y mejora tu gestión de
          explotaciones animales.
        </h3>
      </div>
      <div className="loginhome">
        <a href="/login">
          <button className="home4">Login</button>
        </a>
        <p className="register">¿No estás registrado?</p>
        <span className="span_register">
          regístrate <Link to="/register">aquí</Link>
        </span>
      </div>
    </div>
  );
};

export default Home;
