import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import { CardPerfil } from "./CardPerfil";
import { BodyPerfil, CaixaP, Desafiosdiv, Desafiotext } from "./PerfilStyled";

export const Perfil = () => {
  return (
    <BodyPerfil>
      <CaixaP>
        <Header />
        <CardPerfil />
      </CaixaP>
      <Desafiosdiv>
        <Desafiotext>Desafios completos:</Desafiotext>
      </Desafiosdiv>
    </BodyPerfil>
  );
};
