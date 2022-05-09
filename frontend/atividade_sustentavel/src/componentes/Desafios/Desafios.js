import { Header } from "../Header/Header";
import {
  BodyDesafios,
  DesafioDiv,
  TittleDesafiodiv,
  Tittle,
  DivMeta,
  TituloDivMeta,
  PontosDivMeta,
  TituloEDescriçao,
  PontosEBotao,
  ButtonIniciaMeta,
} from "./DesafiosStyle";

export const Desafios = () => {
  return (
    <BodyDesafios>
      <Header />
      <DesafioDiv>
        <TittleDesafiodiv>
          <Tittle>Desafios Disponíveis:</Tittle>
        </TittleDesafiodiv>
        <DivMeta>
          <TituloEDescriçao>
            <TituloDivMeta>
              <Tittle>PLANTE UMA ÁRVORE</Tittle>
            </TituloDivMeta>
            <div>
              <p>Descrição da meta</p>
            </div>
          </TituloEDescriçao>
          <PontosEBotao>
            <PontosDivMeta>
              <h4>300 p.</h4>
            </PontosDivMeta>
            <div>
              <ButtonIniciaMeta>Começar</ButtonIniciaMeta>
            </div>
          </PontosEBotao>
        </DivMeta>
      </DesafioDiv>
    </BodyDesafios>
  );
};
