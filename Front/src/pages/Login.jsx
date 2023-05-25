 import React from "react";
import { useContext } from "react"
import "../styles/Login.scss";
import { JwtContext } from "../context/jwtContext"
import { useForm } from "react-hook-form";
import { API } from "../services/Api";
 import { useNavigate } from "react-router-dom";
const Login = () => {
  const { setJwt } = useContext(JwtContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (formData) => {
     
    API.post("/login", formData).then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("user", res.data.user.email);
      setJwt(localStorage.getItem("token"));
      alert("¡HAS INICIADO SESIÓN!");
       navigate("/animales");
    });
  };

  return (
    <div className="login2">
    <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="porEjemplo@gmail.com"
        {...register("email", { required: true })}
      />
      {console.log(errors)}
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        id="password"
        {...register("password", {
          required: true,
          pattern: /^(?=.*[A-Z])(?=.*\d).{5,}$/,
        })}
      />
      <span className="p_error">
        {errors?.password?.type === "pattern" &&
          "*Contraseña inválida. Requisitos: mayúscula, minúscula y 5 dígitos."}
      </span>

      <button className="boton_login" type="submit">
        Iniciar Sesión
      </button>
    </form>
    </div>
  );
};

export default Login;
