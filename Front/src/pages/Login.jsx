import React from "react";
import "../styles/Login.scss";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    // console.log(formData);
    API.post("users/login", formData).then((res) => {});
    alert("¡HAS INICIADO SESIÓN!");
    navigate("/animales");
  };

  return (
    <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="porEjemplo@gmail.com"
        {...register("email", { required: true })}
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

      <button className="boton_login" type="submit">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default Login;
