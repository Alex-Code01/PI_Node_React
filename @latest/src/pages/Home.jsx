import Mapa from "../components/Mapa";
import BarraPesquisa from "../components/BarraPesquisa";
import useLocalizacao from "../hooks/useLocalizacao";

export default function Home() {
  const { posicao, erro } = useLocalizacao();
  return (
    <main className="tela">
      <Mapa posicao={posicao} />
      <section className="painel">
        <BarraPesquisa />
        {erro && <p className="aviso">{erro}</p>}
      </section>
    </main>
  );
}
