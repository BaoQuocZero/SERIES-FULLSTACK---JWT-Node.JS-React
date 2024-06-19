import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRouters from "./routes/web.js";
import bodyParser from "body-parser";
import initApiRouters from './routes/api.js'
import configCors from './config/cors.js'
//import connection from './config/connectDB.js'
require("dotenv").config();

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

initWebRouters(app);
initApiRouters(app);


app.use((req, res) => {
    return res.send("404 not found")
})

app.listen(PORT, () => {
    console.log("JWT is runing on the port ", PORT)
})