import styled from "styled-components";

export const BodyDesafios = styled.body`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background-image: url("/Background.png"),
    linear-gradient(
      3.77deg,
      rgba(69, 167, 84, 0.8)-30.49%,
      rgba(74, 252, 92, 0) 76.89%
    );
  background-repeat: no-repeat, repeat;
  background-position: center bottom;
  background-size: 1390px;
  background-attachment: fixed;
`;

export const DesafioDiv = styled.div`
  width: 50vw;
  min-height: 60vh;
  margin-top: 40px;
  color: #fff;
  background: rgba(63, 96, 57, 0.9);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TittleDesafiodiv = styled.div`
  display: flex;
  align-items: flex-start;
  width: 50vw;
  background-color: #405337;
  box-sizing: border-box;
  border-radius: 21px;
  padding: 10px;
  height: 10%;
`;

export const Tittle = styled.h3`
  margin: 0;
`;

export const DivMeta = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #405337;
  border-radius: 12px;
  width: 45vw;
  height: 18vh;
  margin-top: 20px;
`;

export const TituloDivMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vw;
  background-color: #45a754;
  box-sizing: border-box;
  border-radius: 12px;
  border-radius: 12px;
  height: 30%;
  margin-top: 10px;
  margin-left: 10px;
`;

export const PontosDivMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4vw;
  background-color: #3f6039;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 12px;
  border-radius: 12px;
  height: 30%;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const TituloEDescriçao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PontosEBotao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 10px;
`;

export const ButtonIniciaMeta = styled.div`
  width: 8vw;
  height: 40px;
  background: #45a754;
  border-radius: 0px 0px 50px 0px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
`;
