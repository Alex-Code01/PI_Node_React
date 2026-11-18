import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MVP: autenticação simulada. Trocar por back-end (RF01/RF02) quando houver API.
export default function Login({ onEntrar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  function enviar(e) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email) || senha.length < 6) {
      setErro("Informe um e-mail válido e uma senha com pelo menos 6 caracteres.");
      return;
    }
    onEntrar({ nome: email.split("@")[0] });
    navigate("/");
  }

  return (
    <main className="centro">
      <form className="cartao" onSubmit={enviar} noValidate>
        <h1>Entrar no Empty-Bus</h1>
        <label>E-mail<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
        <label>Senha<input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} /></label>
        {erro && <p className="aviso" role="alert">{erro}</p>}
        <button type="submit">Entrar</button>
        <button type="button" className="secundario" onClick={() => { onEntrar({ nome: "visitante" }); navigate("/"); }}>
          Continuar como visitante
        </button>
      </form>
    </main>
  );
}
