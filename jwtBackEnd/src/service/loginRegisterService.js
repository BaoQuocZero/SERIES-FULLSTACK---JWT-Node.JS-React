import db from '../models/index'
import bcrypt, { hash } from 'bcryptjs'
import { Op } from 'sequelize';

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
        await db.User.create({
            email: rawUserData.email,
            username: rawUserData.username,
            password: hashPassword,
            phone: rawUserData.phone
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

        // console.log(">>>>>>>>>>>>>>>> js obj", user.get({ plain: true }))
        // console.log(">>>>>>>>>>>>>>>> sequelize obj", user)

        if (user) {
            console.log(">>> Found user of email/phone: ", rawData.valueLogin, " password: ", rawData.password)
            let isCorrectPassword = checkPassword(rawData.password, user.password)
            if (isCorrectPassword === true)
                return {
                    EM: 'ok!',
                    EC: 0,
                    DT: ''
                }
        }

        console.log(">>> Not found user of email/phone or password incorrect!: ", rawData.valueLogin, " password: ", rawData.password)
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
    handleUserlogin
}