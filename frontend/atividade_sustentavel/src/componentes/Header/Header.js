import desafiosDisponiveis from "../../assets/desafiosDisponiveis.png";
import Perfil from "../../assets/Perfil.png";
import { Headers, VectorDesafio, VectorPerfil, Body, Text, Title } from "./HeaderStyle";

export const Header = () => {
  return (
    <Body>
      <Headers>
        <VectorDesafio src={desafiosDisponiveis} alt="Desafios-disponiveis" />
        <VectorPerfil src={Perfil} alt="Perfil" />
      </Headers>
      <Text>
        <Title>uma</Title>
        <h1> Atitude Sustentável</h1>
      </Text>
    </Body>

  );
};
