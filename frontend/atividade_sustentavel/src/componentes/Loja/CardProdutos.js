import { ButtonCard, Card, NomePrice } from "./CardProdutosStyle";

export const CardProdutos = () => {
  return (
    <Card>
      <img src="" alt="Sabonete Líquido" />
      <NomePrice>
        <h2>Sabonete Líquido</h2>
        <p>500 pontos</p>
      </NomePrice>
      <ButtonCard>Trocar pontos</ButtonCard>
    </Card>
  );
};
