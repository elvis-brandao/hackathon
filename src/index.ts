import app from "./app";
import { setTrocaLoja } from "./endepoints/TrocaLoja";
import { signup }  from "./endepoints/signup";
import { setAtitude } from "./endepoints/atitude";
import { setCarteira } from "./endepoints/carteira";
import { setProdutos } from "./endepoints/produtos";
import { setNivelUsuario } from "./endepoints/nivelUsuario";
import { getAllUser } from "./endepoints/getAllUser";
import { getUser } from "./endepoints/getUsers";
import { getCarteira } from "./endepoints/getCarteira"
import { getProdutos } from "./endepoints/getAllProdutos";
import { getProdutoId } from "./endepoints/getProdutosId";
import { getTrocaLojaByUser } from "./endepoints/getTrocaLojaByUser";
import { getAtitudesUser } from "./endepoints/getAtitudes";
import { getAllAtitude } from "./endepoints/getAllAtitudes";
import { getNivelUser } from "./endepoints/getNivelUser";
import { getHome } from "./endepoints/getHome"
import {login } from "./endepoints/login";

// get teste
app.get("/", getHome);


// login
app.post("/user/login", login);

// Create user
app.post("/user/signup", signup);

// Create atitude
app.post("/user/atitude", setAtitude);

// Create carteira
app.post("/user/carteira", setCarteira);

// Troca Loja
app.post("/user/historico", setTrocaLoja);

// Add produtos
app.post("/loja", setProdutos);

// Nível Usuário
app.post("/user/nivel", setNivelUsuario);

// Buscar todos Usuário
app.get("/user", getAllUser);

// Buscar todos Usuário
app.get("/user/:id", getUser);

// Buscar todos Usuário
app.get("/user/carteira/:id/", getCarteira);

// Buscar produtos
app.get("/produtos", getProdutos);

// Buscar produtos por Id
app.get("/produtos/:id",  getProdutoId);

// Buscar TrocaLoja
app.get("/trocaLoja/:id",  getTrocaLojaByUser);

// Buscar Atitude por id usuário
app.get("/user/atitude/:id",  getAtitudesUser);

// Buscar todas Atitude
app.get("/atitude",  getAllAtitude);

// Buscar nivel usuário
app.get("/user/nivel/:id",  getNivelUser);