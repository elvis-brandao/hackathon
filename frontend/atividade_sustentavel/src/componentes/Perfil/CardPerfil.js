import {
  BodyCard,
  Ellipse,
  UserName,
  Nivel,
  ButtonCard,
  ButtonEPontos,
  ContadorDePontos,
  Quantitativo,
  Desafiosdiv,
} from "./CardPerfilStyle";
import Ellipse1 from "../../assets/Ellipse1.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import vectorPontos from "../../assets/vector-pontos.png";

export const CardPerfil = () => {
  return (
    <div>
      <BodyCard>
        <Ellipse src={Ellipse1} alt="Ellipse" />
        <div>
          <div>
            <UserName>Maria Fernanda dos Santos</UserName>
            <Nivel>Nv. de exp:</Nivel>
          </div>

          <ButtonEPontos>
            <ButtonCard>
              lojinha <ShoppingCartIcon fontSize="small" />
            </ButtonCard>
            <ContadorDePontos>
              <h4>5,000 points</h4>
              <Quantitativo src={vectorPontos} alt="quantitativo" />
            </ContadorDePontos>
          </ButtonEPontos>
        </div>
      </BodyCard>

    </div>
  );
};
