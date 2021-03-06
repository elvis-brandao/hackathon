import styled from "styled-components";

export const BodyPerfil = styled.body`
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

export const Desafiosdiv = styled.div`
  width: 60vw;
  min-height: 40vh;
  background: rgba(69, 167, 84, 0.8);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 21px;
  color: #ffff;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 47px;
  padding-left: 10px;
  margin-top: 20px;
`;

export const Desafiotext = styled.h3`
  margin: 0;
`;

export const DisplayBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
