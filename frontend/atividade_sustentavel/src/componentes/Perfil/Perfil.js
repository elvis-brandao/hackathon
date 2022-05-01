import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import { CardPerfil } from "./CardPerfil";
import { BodyPerfil, CaixaP } from "./PerfilStyled";

export const Perfil = () => {
  return (
    <BodyPerfil>
      <CaixaP>
        <h1>oioi</h1>
        <Header />
        <CardPerfil />
      </CaixaP>
    </BodyPerfil>
  );
};
