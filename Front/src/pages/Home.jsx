import React from "react";
import "../styles/Home.scss";
const Home = () => {
  return (
    <div className="container">
      <div className="texto-home">
        
          <h1 className="cabecera">¡Presentamos "Smart Farm" - Tu Solución Completa de Gestión de
          Explotaciones Animales!</h1> <h3 className="cabecera1">¡Bienvenido a Smart Farm, la aplicación
          definitiva diseñada para simplificar y optimizar tus operaciones
          ganaderas!</h3> <p className="texto">Realiza un seguimiento detallado de cada animal, incluyendo
          su salud, alimentación y otros datos relevantes.</p>
          <p className="texto1">Programa recordatorios y alertas para garantizar un cuidado oportuno y
          adecuado de tus animales.</p>  <p className="texto2">Lleva un registro exhaustivo de tratamientos
          médicos, vacunas y otros procedimientos de salud.</p> <p className="texto3">Gestiona
          eficientemente el inventario de alimentos y suministros para optimizar
          los recursos.</p> 
          <h3 className="texto4">Descarga Smart Farm hoy mismo y simplifica y mejora tu gestión
          de explotaciones animales.</h3>
       
      </div>
      <div className="login">
      <h1 className="api">Smart Farm</h1>
      <form className="home-form">
        <label className="home" htmlFor="email">
          Correo electrónico:
        </label>
        <input className="home1" type="email" id="email" />
        <label className="home2" htmlFor="password">
          Contraseña:
        </label>
        <input className="home3" type="password" id="password" />
        <button className="home4" type="submit">
          Iniciar sesión
        </button>
      </form>
      </div>
    </div>
  );
};

export default Home;
