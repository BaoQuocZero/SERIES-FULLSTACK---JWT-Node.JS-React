import mysql from 'mysql2/promise';
import bcrypt, { hash } from 'bcryptjs'
import bluebỉd from 'bluebird'
import db from '../models/index'

const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = async (email, password, username) => {
    let hashPass = hashPassword(password);

    try {
        await db.User.create({
            username: username,
            email: email,
            password: hashPass
        })
    }
    catch (err) {
        console.log("Err createNewUser >>>> ", err)
    }
}

const getUserList = async () => {
    let user = [];
    user = await db.User.findAll();
    return user;
    // Create the connection to database
    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebỉd
    // });

    // try {
    //     const [rows, fields] = await connection.execute(
    //         'SELECT * FROM user ORDER BY id DESC'
    //     );
    //     return rows;
    // }
    // catch (err) {
    //     console.log("Err getUserList >>>> ", err)
    // }
}

const deleteUser = async (userId) => {
    await db.User.destroy({
        where: {
            id: userId
        }
    })
    // Create the connection to database
    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebỉd
    // });

    // try {
    //     const [rows, fields] = await connection.execute(
    //         'DELETE FROM user WHERE id = ?', [id]
    //     );
    //     return rows;
    // }
    // catch (err) {
    //     console.log("Err deleteUser >>>> ", err)
    // }
}

const getUserById = async (id) => {
    let user = {};
    user = await db.User.findOne({
        where: { id: id }
    })
    //7.1 Hiển Thị/Cập Nhật/Xóa user với ORM | SERIES FULLSTACK - JWT, Node.JS & React
    return user.get({ plain: true });
    // Create the connection to database
    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebỉd
    // });

    // try {
    //     const [rows, fields] = await connection.execute(
    //         'SELECT * FROM user WHERE id = ?', [id]
    //     );
    //     return rows;
    // }
    // catch (err) {
    //     console.log("Err getUserById >>>> ", err)
    // }
}

const updateUserInfo = async (email, username, id) => {
    await db.User.update(
        {
            email: email,
            username: username,
        },
        {
            where: {
                id: id
            }
        }
    );
    // Create the connection to database
    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebỉd
    // });

    // try {
    //     const [rows, fields] = await connection.execute(
    //         'UPDATE user SET email = ?, username = ? WHERE id = ?', [email, username, id]
    //     );
    //     return rows;
    // }
    // catch (err) {
    //     console.log("Err updateUserInfo >>>> ", err)
    // }
}

module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUserInfo
}