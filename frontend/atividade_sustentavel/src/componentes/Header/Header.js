import desafiosDisponiveis from "../../assets/desafiosDisponiveis.png";
import Perfil from "../../assets/Perfil.png";
import { Headers, VectorDesafio, VectorPerfil } from "./HeaderStyle";

export const Header = () => {
  return (
    <Headers>
      <VectorDesafio src={desafiosDisponiveis} alt="Desafios-disponiveis" />
      <VectorPerfil src={Perfil} alt="Perfil" />
    </Headers>
  );
};
