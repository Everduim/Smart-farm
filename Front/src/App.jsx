import { useState } from 'react'
import { JwtContext } from "./context/jwtContext"
import { Routes, Route } from "react-router-dom";
import Header from "./core/header/Header";
import "./App.css";
import Home from "./pages/Home";
import Especies from "./pages/Especies";
import Ejemplares from "./pages/Ejemplares";
import Ejemplar from "./pages/Ejemplar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { RequireAuth } from "./components/RequireAuth";

function App() {
  const [jwt, setJwt] = useState(null);

  return (
    <>
      <JwtContext.Provider value={{ jwt, setJwt }}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/especies"
            element={
              <RequireAuth>
                <Especies />
              </RequireAuth>
            }
          />
          
          <Route path="/ejemplares/:id" element={<Ejemplares />} />
          <Route path="/ejemplar/:id" element={<Ejemplar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Register />} />
        </Routes>
      </JwtContext.Provider>
    </>
  );
}

export default App;
