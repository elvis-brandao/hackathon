import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import { CardPerfil } from "./CardPerfil";
import {
  BodyPerfil,
  Desafiosdiv,
  Desafiotext,
  DisplayBody,
} from "./PerfilStyled";

export const Perfil = () => {
  return (
    // <DisplayBody>
    //   <Menu />

    <BodyPerfil>
      <Header />

      <CardPerfil />
      <Desafiosdiv>
        <Desafiotext>Desafios completos:</Desafiotext>
      </Desafiosdiv>
    </BodyPerfil>
    // </DisplayBody>
  );
};
