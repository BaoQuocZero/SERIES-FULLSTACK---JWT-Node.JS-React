require('dotenv').config()
import db from '../models/index'
import bcrypt, { hash } from 'bcryptjs'
import { Op } from 'sequelize';
import { GetGroupWithRole } from './JWTSerices'
import { createJWT } from '../middleware/JWTAction'

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const checkEmailExist = async (userEmail) => {
    let user = await db.User.findOne({
        where: { email: userEmail }
    })

    if (user)
        return true

    return false

}

const checkPhoneExist = async (userPhone) => {
    let user = await db.User.findOne({
        where: { phone: userPhone }
    })

    if (user)
        return true

    return false

}

const registerNewUser = async (rawUserData) => {

    try {
        let isEmailExist = await checkEmailExist(rawUserData.email)
        if (isEmailExist === true)
            return {
                EM: 'The email is already exist',
                EC: 1
            }
        let isPhoneExist = await checkPhoneExist(rawUserData.email)

        if (isPhoneExist === true)
            return {
                EM: 'The phone is already exist',
                EC: 1
            }

        let hashPassword = hashUserPassword(rawUserData.password)

        //create new user
        await db.User.create({
            email: rawUserData.email,
            username: rawUserData.username,
            password: hashPassword,
            phone: rawUserData.phone,
            groupId: 4
        })

        return {
            EM: 'A user is created successfully!',
            EC: 0
        }

    } catch (error) {
        console.log(e);
        return {
            EM: 'Something wrongs in service ...',
            EC: -2
        }
    }
}

const checkPassword = (inputPassword, hashPassword) => {
    return bcrypt.compareSync(inputPassword, hashPassword); // true of false
}

const handleUserlogin = async (rawData) => {
    try {

        let user = await db.User.findOne({
            where: {
                [Op.or]: [
                    { email: rawData.valueLogin },
                    { phone: rawData.valueLogin }
                ]
            }
        })

        if (user) {
            let isCorrectPassword = checkPassword(rawData.password, user.password)
            if (isCorrectPassword === true) {

                //test role
                let GroupWithRole = await GetGroupWithRole(user);
                let payload = {
                    email: user.email,
                    GroupWithRole,
                    expiresIn: process.env.JWT_EXPIRES_IN
                }

                let token = createJWT(payload)

                return {
                    EM: 'ok!',
                    EC: 0,
                    DT: {
                        access_token: token,
                        GroupWithRole
                    }
                }
            }
        }

        return {
            EM: 'Your email/phone number or password incorrect!',
            EC: 1,
            DT: ''
        }



    } catch (error) {
        console.log(error);
        return {
            EM: 'Something wrongs in service ...',
            EC: -2
        }
    }
}

module.exports = {
    registerNewUser,
    handleUserlogin,
    hashUserPassword,
    checkEmailExist,
    checkPhoneExist
}