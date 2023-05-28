import { createContext,useState } from "react";


// Creamos el contexto
export const JwtContext = createContext()
// Creamos el proveedor del contexto
export const JwtProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Función para actualizar el token
  const updateToken = (newToken) => {
    setToken(newToken);
  };

  // Valores que serán accesibles desde los componentes hijos
  const contextValues = {
    token,
    updateToken,
  };

  return (
    <JwtContext.Provider value={contextValues}>{children}</JwtContext.Provider>
  );
};

