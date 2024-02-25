import mysql from 'mysql2';
import bcrypt, { hash } from 'bcryptjs'
const salt = bcrypt.genSaltSync(10);

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
});

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

const getUserList = () => {
    let hashPass = hashPassword(password);

    connection.query(
        'SELECT * FROM users',
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
        }
    );
}

module.exports = {
    createNewUser,
    getUserList
}