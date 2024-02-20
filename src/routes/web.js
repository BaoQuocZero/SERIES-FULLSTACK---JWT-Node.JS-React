import express from "express";

const router = express.Router();

/**
 * 
 * @param {*} app - express app
 */

const initWebRouters = (app) => {
    router.get("/", (req, res) => {
        return res.send("Hello world")
    });
    return app.use("/", router); // Sử dụng app.use() thay vì app.user()
};

export default initWebRouters;