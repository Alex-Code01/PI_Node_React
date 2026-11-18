import { useState, useEffect } from "react";

// Simula um ônibus indo e voltando pelos pontos da linha (substituir por posição real depois).
export default function useOnibusSimulado(linha) {
  const [estado, setEstado] = useState({ t: 0, volta: false });

  useEffect(() => {
    setEstado({ t: 0, volta: false });
    if (!linha) return;
    const max = linha.pontos.length - 1;
    const id = setInterval(() => {
      setEstado(({ t, volta }) => {
        const prox = t + 0.03;
        return prox >= max ? { t: 0, volta: !volta } : { t: prox, volta };
      });
    }, 100);
    return () => clearInterval(id);
  }, [linha]);

  if (!linha) return null;
  const max = linha.pontos.length - 1;
  const u = estado.volta ? max - estado.t : estado.t; // posição ao longo da linha
  const trecho = Math.min(Math.floor(u), max - 1);
  const f = u - trecho;
  const a = linha.pontos[trecho].pos;
  const b = linha.pontos[trecho + 1].pos;
  return {
    pos: [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f],
    lotacao: linha.lotacao[trecho],
    sentido: estado.volta ? "volta" : "ida",
  };
}
