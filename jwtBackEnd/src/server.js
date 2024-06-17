import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRouters from "./routes/web.js";
import bodyParser from "body-parser";
import initApiRouters from './routes/api.js'
import configCors from './config/cors.js'
//import connection from './config/connectDB.js'
require("dotenv").config();

import { createJWT, veryfyToken } from "./middleware/JWTAction.js"

const app = express();
const PORT = process.env.PORT || 8080;

//config Cors
configCors(app);

//config ViewEngine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//test connection
//connection()

//test
let token = createJWT()
let dataToken = veryfyToken(token)
console.log(dataToken)

initWebRouters(app);
initApiRouters(app);

app.listen(PORT, () => {
    console.log("JWT is runing on the port ", PORT)
})