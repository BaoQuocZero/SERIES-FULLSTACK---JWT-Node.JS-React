import mysql from 'mysql2';

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
});


const HandleHelloWorld = (req, res) => {
    let name = "Bảo DZ Pro"
    return res.render("home.ejs", { name })
}

const HandleUserPage = (req, res) => {
    let name = "Bảo DZ Pro"
    return res.render("user.ejs", { name })
}

const HandleCreateNewUser = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    connection.query(
        'INSERT INTO users (email, password, username) VALUES (?, ?, ?)', [email, password, username],
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
        }
    );

    return res.send("ok")
}

module.exports = {
    HandleHelloWorld,
    HandleUserPage,
    HandleCreateNewUser
}