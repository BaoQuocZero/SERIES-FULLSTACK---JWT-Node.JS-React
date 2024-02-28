import express from "express";

/**
 * 
 * @param {*} app - express app
 */

const configViewEngine = (app) => {
    app.use(express.static('./src/public'))
    app.set("view engine", "ejs"); //Định nghĩa công nghệ ejs
    app.set("views", "./src/views"); //ejs lưu ở views nếu lưu ngoài thư mục này sẽ bị lỗi
}

export default configViewEngine;