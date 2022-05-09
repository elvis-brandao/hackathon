import { useState } from "react";
import desafiosDisponiveis from "../../assets/desafiosDisponiveis.png";
import Perfil from "../../assets/Perfil.png";
import VectorMenu from "../../assets/VectorMenu.png";
import { Menu } from "../Menu/Menu";
import { useHistory } from "react-router-dom";
import { goToPerfil, goToDesafios } from "../../Routes/Cordinate";
import {
  Headers,
  VectorDesafio,
  VectorPerfil,
  Body,
  Text,
  Title,
  MenuHeaders,
  BotãoMenu,
  MenuD,
} from "./HeaderStyle";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (setOpen) {
      return <Menu />;
    }
  };

  const history = useHistory();

  return (
    <Body>
      <MenuHeaders>
        <MenuD>
          <BotãoMenu src={VectorMenu} onClick={handleOpen} />
        </MenuD>
        <Headers>
          <VectorDesafio src={desafiosDisponiveis} alt="Desafios-disponiveis" onClick={() => goToDesafios(history)} />
          <VectorPerfil src={Perfil} alt="Perfil" onClick={() => goToPerfil(history)} />
        </Headers>
      </MenuHeaders>
      <Text>
        <Title>uma</Title>
        <h1> Atitude Sustentável</h1>
      </Text>
    </Body>
  );
};
