import userService from '../service/userService'

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

    userService.createNewUser(email, password, username);

    return res.send("ok")
}

module.exports = {
    HandleHelloWorld,
    HandleUserPage,
    HandleCreateNewUser
}