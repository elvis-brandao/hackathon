import app from "./app";

import { signup }  from "./endepoints/signup";
import { setAtitude } from "./endepoints/atitude";
import { setCarteira } from "./endepoints/carteira";

// Create user
app.post("/user/signup", signup);

// Create atitude
app.post("/user/atitude", setAtitude);

// Create carteira
app.post("/user/carteira", setCarteira);