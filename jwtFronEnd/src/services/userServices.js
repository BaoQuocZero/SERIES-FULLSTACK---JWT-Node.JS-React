import axios from '../setup/axios';

const registerNewUser = (email, phone, username, password) => {
    return axios.post("api/v1/register", {
        email, phone, username, password
    })
}

const loginUser = (valueLogin, password) => {
    return axios.post("api/v1/login", {
        valueLogin, password
    })
}

const fetchAllUser = (page, limit) => {
    return axios.get(`api/v1/user/read?page=${page}&limit=${limit}`) //temple string
}

const deleteUser = (user) => {
    return axios.delete(`api/v1//user/delete`, { data: { id: user.id } })
}

const fetchGroup = () => {
    return axios.get(`api/v1/group/read`) //temple string
}

const createNewUser = (userData) => {
    return axios.post(`api/v1/user/create`, { ...userData }) //temple string
}

const updateCurrentUser = (userData) => {
    return axios.put(`api/v1/user/update`, { ...userData }) //temple string
}

const getUserAccount = () => {
    return axios.get(`api/v1/account`) //temple string
}

export {
    registerNewUser, loginUser, fetchAllUser, deleteUser,
    fetchGroup, createNewUser, updateCurrentUser,
    getUserAccount
}