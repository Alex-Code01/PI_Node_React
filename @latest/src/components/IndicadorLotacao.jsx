export function classificar(pct) {
  if (pct < 40) return { texto: "Vazio", nivel: "baixa" };
  if (pct < 75) return { texto: "Moderado", nivel: "media" };
  return { texto: "Cheio", nivel: "alta" };
}

export default function IndicadorLotacao({ percentual }) {
  const { texto, nivel } = classificar(percentual);
  return (
    <div className="lotacao" role="status" aria-label={`Lotação estimada: ${texto}, ${percentual}%`}>
      <div className="lotacao-barra">
        <div className={`lotacao-nivel ${nivel}`} style={{ width: `${percentual}%` }} />
      </div>
      <strong>{texto}</strong>
      <span>{percentual}% (estimado)</span>
    </div>
  );
}
