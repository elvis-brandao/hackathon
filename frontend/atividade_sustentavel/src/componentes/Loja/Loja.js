import { Header } from "../Header/Header";
import { CardProdutos } from "./CardProdutos";
import { BodyLoja, TitlePontos, Cards } from "./LojaStyle";

export const Loja = () => {
  return (
    <BodyLoja>
      <Header />
      <TitlePontos>
        <h2>Lojinha</h2>
        <h3>2000 Pontos</h3>
      </TitlePontos>
      <Cards>
        <CardProdutos />
      </Cards>
    </BodyLoja>
  );
};
