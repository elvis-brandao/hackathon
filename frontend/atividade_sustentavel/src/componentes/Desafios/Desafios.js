import { Header } from "../Header/Header";
import {
  BodyDesafios,
  DesafioDiv,
  TittleDesafiodiv,
  Tittle,
  DivMeta,
  TituloDivMeta,
  PontosDivMeta,
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
          <TituloDivMeta>
            <Tittle>PLANTE UMA ÁRVORE</Tittle>
          </TituloDivMeta>
          <PontosDivMeta>
            <h4>300 p.</h4>
          </PontosDivMeta>
        </DivMeta>
      </DesafioDiv>
    </BodyDesafios>
  );
};
