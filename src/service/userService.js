import mysql from 'mysql2/promise';
import bcrypt, { hash } from 'bcryptjs'
import bluebỉd from 'bluebird'

const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = (email, password, username) => {
    let hashPass = hashPassword(password);

    connection.query(
        'INSERT INTO users (email, password, username) VALUES (?, ?, ?)', [email, hashPass, username],
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
        }
    );
}

const getUserList = async () => {
    let users = [];
    // Create the connection to database
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebỉd
    });

    // return connection.query(
    //     'SELECT * FROM users',
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err)
    //             return users;
    //         }
    //         users = results
    //         return users
    //     }
    // );

    try {
        const [rows, fields] = await connection.execute(
            'SELECT * FROM users'
        );
        return rows;
    }
    catch (err) {
        console.log("Err getUserList >>>> ", err)
    }
}

module.exports = {
    createNewUser,
    getUserList
}