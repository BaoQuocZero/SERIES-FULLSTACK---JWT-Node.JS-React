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
    router.post("/delete-user/:id", homeController.HandleDeleteUser)

    router.get("/update-user/:id", homeController.getUpdateUserPage)
    router.post("/user/update-user", homeController.HandleUpdateUser)

    return app.use("/", router); // Sử dụng app.use() thay vì app.user()
};

export default initWebRouters;