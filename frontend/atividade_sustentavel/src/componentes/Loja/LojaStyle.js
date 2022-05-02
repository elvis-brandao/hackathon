import styled from "styled-components";

export const BodyLoja = styled.body`
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

export const TitlePontos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45vw;
  height: 45px;
  background-color: #405337;
  border-radius: 21px;
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
`;

export const Cards = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
