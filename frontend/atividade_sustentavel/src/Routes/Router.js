import Perfil from "../componentes/Perfil/Perfil";
import Desafios from "../componentes/Desafios/Desafios"
import Loja from "../componentes/Loja/Loja"


import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/perfil"}>
                    <Perfil />
                </Route>

                <Route exact path={"/desafios"}>
                    <Desafios />
                </Route>

                <Route exact path={"/loja"}>
                    <Loja />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};