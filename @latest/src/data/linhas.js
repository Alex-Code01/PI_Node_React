// DADOS FICTÍCIOS para o MVP. Trocar por API/GTFS em src/services/.
// pontos: { nome, pos: [lat, lng] }  |  lotacao: % por trecho (trecho i = ponto i -> i+1)
export const linhas = [
  {
    id: "001",
    numero: "001",
    nome: "Boa Viagem / Marco Zero",
    cor: "#0f766e",
    pontos: [
      { nome: "Shopping Recife", pos: [-8.1196, -34.906] },
      { nome: "Pracinha de Boa Viagem", pos: [-8.126, -34.901] },
      { nome: "Terminal Joana Bezerra", pos: [-8.074, -34.892] },
      { nome: "Marco Zero", pos: [-8.063, -34.871] },
    ],
    lotacao: [25, 60, 85],
  },
  {
    id: "002",
    numero: "002",
    nome: "UFPE / Derby",
    cor: "#b45309",
    pontos: [
      { nome: "UFPE", pos: [-8.0505, -34.951] },
      { nome: "Cordeiro", pos: [-8.053, -34.923] },
      { nome: "Praça do Derby", pos: [-8.0577, -34.8996] },
      { nome: "Marco Zero", pos: [-8.063, -34.871] },
    ],
    lotacao: [90, 55, 30],
  },
];

export const buscarLinha = (id) => linhas.find((l) => l.id === id);
