import db from "../models/index";
import { checkEmailExist, checkPhoneExist, hashUserPassword } from './loginRegisterService'

const getAllUser = async () => {

    try {
        let users = await db.User.findAll({
            attributes: ['id', 'username', "email", "phone", "sex"],
            include: { model: db.Group, attributes: ['name', "description"] },
        });
        if (users) {
            return {
                EM: 'get data success',
                EC: 0,
                DT: users
            }
        }
        else {
            return {
                EM: 'get data success',
                EC: 0,
                DT: []
            }
        }

    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrongs with service',
            EC: 1,
            DT: []
        }
    }
}

const getUserWithPagination = async (page, limit) => {

    try {
        let offset = (page - 1) * limit
        const { count, rows } = await db.User.findAndCountAll({
            offset: offset,
            limit: limit,
            attributes: ['id', 'username', "email", "phone", "sex"],
            include: { model: db.Group, attributes: ['name', "description"] },
        })

        let totalPages = Math.ceil(count / limit)
        let data = {
            totalRows: count,
            totalPages: totalPages,
            users: rows
        }

        return {
            EM: 'fetch ok',
            EC: 0,
            DT: data
        }

    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrongs with service',
            EC: 1,
            DT: []
        }
    }
}

const createNewUser = async (data) => {
    try {
        //check email, phone
        let isEmailExist = await checkEmailExist(data.email)
        if (isEmailExist === true)
            return {
                EM: 'The email is already exist',
                EC: 1,
                DT: "email"
            }
        let isPhoneExist = await checkPhoneExist(data.phone)

        if (isPhoneExist === true)
            return {
                EM: 'The phone is already exist',
                EC: 1,
                DT: "phone"
            }

        let hashPassword = hashUserPassword(data.password)

        //hash user pass
        await db.User.create({ ...data, password: hashPassword })
        return {
            EM: "Create ok", //error mesage
            EC: 0, //error code
            DT: [] //data
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrongs with service',
            EC: 1,
            DT: []
        }
    }
}

const updateUser = async (data) => {
    try {
        let user = await db.findOne({
            where: { id: data.id }
        })

        if (user) {
            //update
        } else {
            //not found
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (id) => {
    try {
        let user = await db.User.findOne({
            where: { id: id }
        })

        if (user) {
            await user.destroy();
            return {
                EM: 'Delete user success',
                EC: 0,
                DT: []
            }
        } else {
            return {
                EM: 'User not exit',
                EC: 2,
                DT: []
            }
        }

    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrongs with service',
            EC: 1,
            DT: []
        }
    }
}

module.exports = {
    getAllUser, createNewUser, updateUser, deleteUser, getUserWithPagination
}