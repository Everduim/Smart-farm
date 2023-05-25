import React from "react";
import "../styles/Register.scss";
import { API } from "../services/Api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post("/register", formData).then((res) => {
      console.log(res);
      alert("¡TE HAS REGISTRADO!");
      navigate("/login");
    });
  };

  return (
    <form className="form_registro" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="empresa">Empresa:</label>
      <input
        type="text"
        id="empresa"
        {...register("empresa", { required: true })}
      />

      <label htmlFor="cif">CIF:</label>
      <input
        type="text"
        id="cif"
        placeholder="ej: A34521953"
        {...register("cif", {
          required: true,
          pattern: /^(?=.*[a-zA-Z]).{8,}$/,
        })}
      />
      <p className="p_error">
        {errors?.cif?.type === "pattern" && "*El CIF debe ser como el ejemplo"}
      </p>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="porejemplo@gmail.com"
        {...register("email", { required: true })}
      />

      <label htmlFor="responsable">Responsable:</label>
      <input
        type="text"
        id="text"
        placeholder="Persona a cargo"
        {...register("responsable")}
      />

      <label htmlFor="direccion">Dirección:</label>
      <input
        type="text"
        id="direccion"
        placeholder="Calle, numero"
        {...register("direccion", { required: true })}
      />

      <label htmlFor="numero">Teléfono:</label>
      <input
        type="text"
        id="numero"
        {...register("numero", { required: true, pattern: /^[0-9]{9}$/ })}
        inputMode="numeric"
      />
      <p className="p_error">
        {errors?.numero?.type === "pattern" && "*El telefono debe tener 9 digitos"}
      </p>

      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        {...register("password", {
          required: true,
          pattern: /^(?=.*[A-Z])(?=.*\d).{5,}$/,
        })}
      />
      <p className="p_error">
        {errors?.password?.type === "pattern" && "*La contraseña debe contener al menos una mayuscula y debe tener al menos 5 digitos"}
      </p>
      <div>
        <button className="boton_registro" type="submit">
          Registrarse
        </button>
      </div>
    </form>
  );
};

export default Register;
