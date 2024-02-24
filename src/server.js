import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouters from "./routes/web.js";
import bodyParser from "body-parser"
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initWebRouters(app);

app.listen(PORT, () => {
    console.log("JWT is runing on the port ", PORT)
})