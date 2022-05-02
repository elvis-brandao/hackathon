import React, { useContext } from "react";
import { Header } from "../Header/Header";
import { CardProdutos } from "./CardProdutos";
import NavigateNext from "../../assets/NavigateNext.png";
import { BodyLoja, TitlePontos, Cards } from "./LojaStyle";
import GlobalStateContext from "../../Global/GlobalStateContext";

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
        <img src={NavigateNext} alt="Next" />
      </Cards>
    </BodyLoja>
  );
};
