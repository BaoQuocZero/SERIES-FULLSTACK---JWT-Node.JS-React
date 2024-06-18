import db from '../models/index'

const GetGroupWithRole = async (user) => {
    //scope

    // let roles = await db.Group.findOne({
    //     where: { id: user.groupId },
    //     include: [{ model: db.Role, actributes: ['id', 'url', 'description'] }],
    // });

    let roles = await db.Group.findOne({
        where: { id: user.groupId },
        attributes: ["id", "name", "description"],
        include: {
            model: db.Role,
            attributes: ["id", "url", "description"],
            through: { attributes: [] }
        }
    });

    return roles ? roles : {}
}

module.exports = {
    GetGroupWithRole
}