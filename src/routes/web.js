import express from "express";
import homeController from '../controller/homeController'

const router = express.Router();

/**
 * 
 * @param {*} app - express app
 */

const initWebRouters = (app) => {
    router.get("/", homeController.HandleHelloWorld);
    router.get("/user", homeController.HandleUserPage);

    router.post("/user/create-user", homeController.HandleCreateNewUser)

    return app.use("/", router); // Sử dụng app.use() thay vì app.user()
};

export default initWebRouters;