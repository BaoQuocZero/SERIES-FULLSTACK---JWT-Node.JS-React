import express from "express";
import apiController from '../controller/apiController';
import userControler from '../controller/userController'
import groupControler from '../controller/groupControler'

import { checkUserJWT, checkUserPermission } from '../middleware/JWTAction'

const router = express.Router();

/**
 * 
 * @param {*} app - express app
 */

const testMiddleware = (req, res, next) => {

    console.log("calling a middleware")
    next()
}

// const checkUserLogin = (req, res, next) => {
//     const nonSecurePaths = ['/', '/register', '/login'];
//     if (nonSecurePaths.includes(req.path)) return next();

//     next();
// }

const initApiRouters = (app) => {

    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handlelogin);

    router.get("/user/read", checkUserJWT, checkUserPermission, userControler.readFunc);
    router.post("/user/create", userControler.createFunc)
    router.put("/user/update", userControler.updateFunc)
    router.delete("/user/delete", userControler.deleteFunc)

    router.get("/group/read", groupControler.readFunc);

    return app.use("/api/v1/", router); // Sử dụng app.use() thay vì app.user()
};

export default initApiRouters;