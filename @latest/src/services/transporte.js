import { linhas, buscarLinha } from "../data/linhas";

// Camada de acesso a dados: hoje usa mock, depois troque por fetch() sem mexer nas telas.
export function pesquisar(termo) {
  const t = termo.trim().toLowerCase();
  if (!t) return [];
  const resultados = [];
  linhas.forEach((l) => {
    if (l.numero.includes(t) || l.nome.toLowerCase().includes(t)) {
      resultados.push({ chave: `l-${l.id}`, tipo: "Linha", titulo: `${l.numero} · ${l.nome}`, linhaId: l.id });
    }
    l.pontos.forEach((p) => {
      if (p.nome.toLowerCase().includes(t)) {
        resultados.push({ chave: `p-${l.id}-${p.nome}`, tipo: "Ponto", titulo: p.nome, detalhe: `Linha ${l.numero}`, linhaId: l.id });
      }
    });
  });
  return resultados;
}

export const obterLinha = (id) => buscarLinha(id);
