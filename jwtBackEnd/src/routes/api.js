import express from "express";
import apiController from '../controller/apiController';
import userControler from '../controller/userController'
import groupControler from '../controller/groupControler'

const router = express.Router();

/**
 * 
 * @param {*} app - express app
 */

const testMiddleware = (req, res, next) => {

    console.log("calling a middleware")
    next()
}

const initApiRouters = (app) => {

    router.get("/test-api", apiController.testApi);

    router.post("/register", apiController.handleRegister);
    router.post("/login", testMiddleware, apiController.handlelogin);

    router.get("/user/read", userControler.readFunc);
    router.post("/user/create", userControler.createFunc)
    router.put("/user/update", userControler.updateFunc)
    router.delete("/user/delete", userControler.deleteFunc)

    router.get("/group/read", groupControler.readFunc);

    return app.use("/api/v1/", router); // Sử dụng app.use() thay vì app.user()
};

export default initApiRouters;