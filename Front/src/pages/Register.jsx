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
    console.log(formData);
    API.post("/usuarios", formData).then((res) => {
      console.log(res);
      alert("¡TE HAS REGISTRADO!");
      navigate("/login");
    });
  };

  return (
    <div className="container-register">
      <form className="form_registro" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="empresa">Empresa</label>
        <input
          type="text"
          id="empresa"
          placeholder="Nombre de la empresa"
          {...register("empresa", { required: true })}
        />

        <label htmlFor="cif">CIF</label>
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
          {errors?.cif?.type === "pattern" &&
            "*El CIF debe ser como el ejemplo: A34521953"}
        </p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="porejemplo@gmail.com"
          {...register("email", { required: true })}
        />

        <label htmlFor="responsable">Responsable</label>
        <input
          type="text"
          id="text"
          placeholder="Persona a cargo"
          {...register("responsable")}
        />
        <div className="direccion">
          <label htmlFor="calle">Calle</label>
          <input
            type="text"
            id="calle"
            placeholder="Nombre de la calle"
            {...register("direccion.calle", { required: true })}
          />
          <label htmlFor="cp">Codigo Postal</label>
          <input
            type="text"
            id="cp"
            placeholder="ej: 24004"
            {...register("direccion.cp", { required: true, pattern: /^\d{5}$/ })}
          />
          <p className="p_error">
            {errors?.cp?.type === "pattern" &&
              "*El Codigo Postal dede contener 5 digitos."}
          </p>

          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            placeholder="Nombre de la ciudad"
            {...register("direccion.ciudad", { required: true })}
          />

          <label htmlFor="pais">Pais</label>
          <input
            type="text"
            id="pais"
            placeholder="Nombre del Pais"
            {...register("direccion.pais", { required: true })}
          />
        </div>
        <label htmlFor="telefono">Teléfono</label>
        <input
          type="text"
          id="telefono"
          {...register("telefono", { required: true, pattern: /^[0-9]{9}$/ })}
          inputMode="numeric"
        />
        <p className="p_error">
          {errors?.telefono?.type === "pattern" &&
            "*El telefono debe contener 9 digitos"}
        </p>

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*[A-Z])(?=.*\d).{5,}$/,
          })}
        />
        <p className="p_error">
          {errors?.password?.type === "pattern" &&
            "*La contraseña debe contener al menos una mayuscula, una minuscula y debe contener al menos 5 digitos."}
        </p>
        <div className="btregis">
          <button className="boton_registro" type="submit">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;