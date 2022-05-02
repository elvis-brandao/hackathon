import { useContext } from "react";
import { ButtonCard, Card, NomePrice } from "./CardProdutosStyle";
import GlobalStateContext from "../../Global/GlobalStateContext";

export const CardProdutos = () => {
  // const { produtosList } = useContext(GlobalStateContext);

  // console.log(produtosList);
  return (
    <Card>
      <img src="" alt="Sabonete Líquido" />
      <NomePrice>
        {/* <h2>{produtosList.name_produtos}</h2> */}
        <p>500 pontos</p>
      </NomePrice>
      <ButtonCard>Trocar pontos</ButtonCard>
    </Card>
  );
};
