import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

L.Marker.prototype.options.icon = L.icon({ iconUrl: icon, shadowUrl: shadow, iconAnchor: [12, 41] });

const iconeOnibus = L.divIcon({ className: "onibus-icone", html: "🚌", iconSize: [32, 32], iconAnchor: [16, 16] });
const RECIFE = [-8.0476, -34.877];

function Centralizar({ alvo }) {
  const map = useMap();
  useEffect(() => {
    if (alvo) map.setView(alvo, map.getZoom());
  }, [alvo, map]);
  return null;
}

function Ajustar({ linha }) {
  const map = useMap();
  useEffect(() => {
    if (linha) map.fitBounds(linha.pontos.map((p) => p.pos), { padding: [40, 40] });
  }, [linha, map]);
  return null;
}

export default function Mapa({ posicao, linha, onibus }) {
  return (
    <MapContainer center={posicao || RECIFE} zoom={13} className="mapa">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap" />
      {linha ? <Ajustar linha={linha} /> : <Centralizar alvo={posicao} />}
      {posicao && (
        <Marker position={posicao}>
          <Popup>Você está aqui</Popup>
        </Marker>
      )}
      {linha && (
        <>
          <Polyline positions={linha.pontos.map((p) => p.pos)} pathOptions={{ color: linha.cor, weight: 5 }} />
          {linha.pontos.map((p) => (
            <CircleMarker key={p.nome} center={p.pos} radius={7} pathOptions={{ color: linha.cor, fillColor: "#fff", fillOpacity: 1 }}>
              <Popup>{p.nome}</Popup>
            </CircleMarker>
          ))}
        </>
      )}
      {onibus && <Marker position={onibus.pos} icon={iconeOnibus} />}
    </MapContainer>
  );
}
