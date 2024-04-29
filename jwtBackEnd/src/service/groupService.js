import db from '../models/index'

const getGroup = async (req, res) => {
    try {
        let data = await db.Group.findAll({
            order: [
                ["name", 'ASC']
            ]
        })
        return {
            EM: "get group success", //error mesage
            EC: 0, //error code
            DT: data //data
        }

    } catch (error) {
        console.log(error)
        return {
            EM: "error from sevice", //error mesage
            EC: 1, //error code
            DT: [] //data
        }
    }
}

module.exports = {
    getGroup
}