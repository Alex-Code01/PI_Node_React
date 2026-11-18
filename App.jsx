import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Linha from "./pages/Linha";
import Login from "./pages/Login";
import "./styles.css";

function lerUsuario() {
  try {
    return JSON.parse(localStorage.getItem("emptybus_usuario"));
  } catch {
    return null;
  }
}

export default function App() {
  const [usuario, setUsuario] = useState(lerUsuario);

  function entrar(u) {
    localStorage.setItem("emptybus_usuario", JSON.stringify(u));
    setUsuario(u);
  }
  function sair() {
    localStorage.removeItem("emptybus_usuario");
    setUsuario(null);
  }

  return (
    <BrowserRouter>
      <header className="topo">
        <Link to="/" className="marca">Empty-Bus</Link>
        {usuario ? (
          <span>Olá, {usuario.nome} <button className="link" onClick={sair}>Sair</button></span>
        ) : (
          <Link to="/login">Entrar</Link>
        )}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linha/:id" element={<Linha />} />
        <Route path="/login" element={<Login onEntrar={entrar} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
