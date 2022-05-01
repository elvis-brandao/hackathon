import { FormatAlignLeft } from "@material-ui/icons";
import { Body, Lista, Nav, Suporte, SuporteText } from "./MenuStyle";

export const Menu = () => {
  return (
    <Body>
      <FormatAlignLeft />
      <Nav>
        <Lista>Sobre nós</Lista>
        <Lista>Blog</Lista>
        <Lista>Feed</Lista>
        <Lista>Metas</Lista>
        <Lista>Lojinha</Lista>
        <Lista>Desafios</Lista>
      </Nav>
      <Suporte>
        <SuporteText>Suporte</SuporteText>
      </Suporte>
    </Body>
  );
};
