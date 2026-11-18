import { useState } from "react";
import { Link } from "react-router-dom";
import { pesquisar } from "../services/transporte";

export default function BarraPesquisa() {
  const [termo, setTermo] = useState("");
  const resultados = pesquisar(termo);

  return (
    <div className="pesquisa">
      <label htmlFor="busca" className="sr-only">Pesquisar linha ou ponto</label>
      <input
        id="busca"
        type="search"
        placeholder="Qual linha ou ponto você procura?"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        autoComplete="off"
      />
      {termo.trim() && (
        <ul className="resultados">
          {resultados.length === 0 && <li className="vazio">Nada encontrado. Tente o número da linha ou o nome do ponto.</li>}
          {resultados.map((r) => (
            <li key={r.chave}>
              <Link to={`/linha/${r.linhaId}`}>
                <b>{r.titulo}</b>
                <small>{r.tipo}{r.detalhe ? ` · ${r.detalhe}` : ""}</small>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
