import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouters from "./routes/web.js";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

configViewEngine(app);

initWebRouters(app);

app.listen(PORT, () => {
    console.log("JWT is runing on the port ", PORT)
})