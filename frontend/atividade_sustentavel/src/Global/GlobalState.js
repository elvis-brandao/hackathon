import { useState, useEffect } from "react";
import { BaseUrl } from "../Constants/Url";
import axios from "axios"

export const GlobalState = (props) => {
  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  const [produtosList, setProdutosList] = useState([]);
  const [taFuncionando, setTaFuncionando] = useState([]);

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = () => {
    axios
      .get(`${BaseUrl}/produtos`, headers)
      .then((res) => {
        console.log(res.data);
        setProdutosList(res.data.produtos);
      })
      .catch((err) => {
        console.log("erro");
        console.log(err);
      });
  };

  const getOk = () => {
    axios
      .get(`${BaseUrl}/`)
      .then((res) => {
        setTaFuncionando(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const data = {
    getProdutos,
    produtosList,
    setProdutosList,
    getOk,
    setTaFuncionando,
    taFuncionando,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
