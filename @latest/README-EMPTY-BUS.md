# Empty-Bus — MVP (front-end)

## Instalação
```bash
npm install react-router-dom leaflet react-leaflet
# Se aparecer erro de peer dependency (React 18): npm install react-leaflet@4
npm run dev -- --host   # Vite   |   npm start  # Create React App
```
Copie a pasta `src/` para o projeto (substituindo `src/App.jsx`) e mantenha seu `main.jsx`/`index.js`.

## Cobertura do backlog
| História | Onde |
|---|---|
| HU03 Mapa / HU04 Localização | `components/Mapa.jsx`, `hooks/useLocalizacao.js` |
| HU05 Pesquisa / HU06 Resultado | `components/BarraPesquisa.jsx`, `pages/Linha.jsx` |
| HU11 Rastreamento (simulado) | `hooks/useOnibusSimulado.js` |
| HU16 Lotação (simulada) | `components/IndicadorLotacao.jsx` |
| HU02 Login (simulado + visitante) | `pages/Login.jsx` |

## Próximos passos
Trocar `src/data/linhas.js` por API/GTFS em `src/services/transporte.js`; depois Cadastro, Favoritos, Reportar.
