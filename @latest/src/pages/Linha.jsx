import { Link, useParams } from "react-router-dom";
import Mapa from "../components/Mapa";
import IndicadorLotacao from "../components/IndicadorLotacao";
import useLocalizacao from "../hooks/useLocalizacao";
import useOnibusSimulado from "../hooks/useOnibusSimulado";
import { obterLinha } from "../services/transporte";

export default function Linha() {
  const { id } = useParams();
  const linha = obterLinha(id);
  const { posicao } = useLocalizacao();
  const onibus = useOnibusSimulado(linha);

  if (!linha) {
    return (
      <main className="centro">
        <p>Linha não encontrada.</p>
        <Link to="/">Voltar à pesquisa</Link>
      </main>
    );
  }

  return (
    <main className="tela">
      <Mapa posicao={posicao} linha={linha} onibus={onibus} />
      <section className="painel">
        <Link to="/" className="voltar">‹ Pesquisar outra linha</Link>
        <h1><span className="selo" style={{ background: linha.cor }}>{linha.numero}</span> {linha.nome}</h1>
        {onibus && (
          <>
            <h2>Lotação agora</h2>
            <IndicadorLotacao percentual={onibus.lotacao} />
            <p className="nota">Ônibus simulado, sentido de {onibus.sentido}. Dados fictícios do MVP.</p>
          </>
        )}
        <h2>Pontos da linha</h2>
        <ol className="pontos">
          {linha.pontos.map((p) => <li key={p.nome}>{p.nome}</li>)}
        </ol>
      </section>
    </main>
  );
}
