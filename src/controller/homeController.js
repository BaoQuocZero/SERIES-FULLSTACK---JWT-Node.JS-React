import userService from '../service/userService'

const HandleHelloWorld = (req, res) => {
    let name = "Bảo DZ Pro"
    return res.render("home.ejs", { name })
}

const HandleUserPage = async (req, res) => {
    let userList = await userService.getUserList();

    return res.render("user.ejs", { userList })
}

const HandleCreateNewUser = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    userService.createNewUser(email, password, username);

    return res.redirect("/user")
}

const HandleDeleteUser = async (req, res) => {
    let id = req.params.id;

    await userService.deleteUser(id);

    return res.redirect("/user")
}

module.exports = {
    HandleHelloWorld,
    HandleUserPage,
    HandleCreateNewUser,
    HandleDeleteUser
}