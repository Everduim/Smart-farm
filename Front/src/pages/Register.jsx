import React from "react";
import "../styles/Register.scss";
import { API } from "../services/Api";

const Register = () => {

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post("users/register", formData).then((res) => {

      
    });
    alert("¡TE HAS REGISTRADO!");
    navigate("/login");
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

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="porEjemplo@gmail.com"
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


      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        {...register("password", {
          required: true,
          pattern: /^(?=.*[A-Z])(?=.*\d).{5,}$/,
        })}
      />

        <button className="boton_registro" type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
