
const HandleHelloWorld = (req, res) => {
    let name = "Bảo DZ Pro"
    return res.render("home.ejs", { name })
}

const HandleUserPage = (req, res) => {
    let name = "Bảo DZ Pro"
    return res.render("user.ejs", { name })
}

module.exports = {
    HandleHelloWorld,
    HandleUserPage
}