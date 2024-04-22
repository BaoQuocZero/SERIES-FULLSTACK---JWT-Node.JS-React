import express from "express";
import apiController from '../controller/apiController';
import userControler from '../controller/userController'

const router = express.Router();

/**
 * 
 * @param {*} app - express app
 */

const initApiRouters = (app) => {

    router.get("/test-api", apiController.testApi);

    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handlelogin);

    router.get("/user/read", userControler.readFunc);
    router.post("/user/create", userControler.createFunc)
    router.put("/user/update", userControler.updateFunc)
    router.delete("/user/delete", userControler.deleteFunc)

    return app.use("/api/v1/", router); // Sử dụng app.use() thay vì app.user()
};

export default initApiRouters;