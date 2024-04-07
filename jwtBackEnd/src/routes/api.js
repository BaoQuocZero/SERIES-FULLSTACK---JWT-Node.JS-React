import express from "express";
import apiController from '../controller/apiController';

const router = express.Router();

/**
 * 
 * @param {*} app - express app
 */

const initApiRouters = (app) => {

    router.get("/test-api", apiController.testApi);

    router.post("/register", apiController.handleRegister);
    return app.use("/api/v1/", router); // Sử dụng app.use() thay vì app.user()
};

export default initApiRouters;