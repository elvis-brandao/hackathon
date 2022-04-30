import app from "./app"
import { setAtitude } from "./endepoints/atitude";
import { signup }  from "./endepoints/signup";
import { setCarteira } from "./endepoints/carteira";

// Create user
app.post("/user/signup", signup)
app.post("/user/atitude", setAtitude)
app.post("/user/carteira", setCarteira)