import React, { isValidElement, useState } from 'react';
import './Login.scss';

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import { loginUser } from '../../services/userServices';

const Login = () => {
    let history = useHistory();

    const [valueLogin, setValuelogin] = useState("");
    const [password, setPassword] = useState("");

    const defaultObjValidInput = {
        isValidValuelogin: true,
        isValidPassword: true
    }

    const [objValidInput, setobjValidInput] = useState(defaultObjValidInput);

    const handleCreateNewAccout = () => {
        history.push("/register")
    }

    const hanleLogin = async () => {
        setobjValidInput(defaultObjValidInput)

        if (!valueLogin) {
            setobjValidInput({ ...defaultObjValidInput, isValidValuelogin: false })
            toast.error("Please enter your email address or phone number!")
            return
        }
        if (!password) {
            setobjValidInput({ ...defaultObjValidInput, isValidPassword: false })
            toast.error("Please enter your password!")
            return
        }

        let response = await loginUser(valueLogin, password)

        if (response && response.data && +response.data.EC === 0) {
            //success
            let data = {
                isAuthenticated: true,
                token: 'fake token'
            }
            sessionStorage.setItem("account", JSON.stringify(data));
            history.push('/users')
            window.location.reload();
        }

        if (response && response.data && +response.data.EC !== 0) {
            //error
            toast.error(response.data.EM)
        }

        console.log(">>>>>>> response :", response.data)
    }

    const handlePressEnter = (event) => {


        if (event.keyCode === 13 && event.code === "Enter") {
            hanleLogin();
        }
    }

    return (
        <div className='login-container '>
            <div className='container'>
                <div className='row px-3 px-sm-0'>

                    <div className='content-left col-12 d-none col-xl-7 d-xl-block'>
                        <div className='brand'>
                            Hoi dan it
                        </div>
                        <div className='detail'>
                            Đây là cái màn hình đang nhập siêu cấp cùi bấp của hỏi dân it
                        </div>
                    </div>

                    <div className='content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3'>
                        <div className='brand d-sm-none'>
                            Hoi dan it
                        </div>

                        <input
                            type='text'
                            className={objValidInput.isValidValuelogin ? 'form-control' : 'is-invalid form-control'}
                            placeholder='Email address or phone number'
                            value={valueLogin}
                            onChange={(event) => { setValuelogin(event.target.value) }}
                        />
                        <input
                            type='password'
                            className={objValidInput.isValidPassword ? 'form-control' : 'is-invalid form-control'}
                            placeholder='Password'
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}
                            onKeyDown={(event) => handlePressEnter(event)}
                        />
                        <button className='btn btn-primary' onClick={() => hanleLogin()}>Login</button>
                        <span className='text-center'>
                            <a className='fogot-password' href='#'>Fogotten password?</a>
                        </span>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleCreateNewAccout()}>
                                Create new accourt
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;