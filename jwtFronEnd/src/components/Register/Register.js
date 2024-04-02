import React, { useEffect } from 'react';
import './Register.scss';

import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    let history = useHistory();
    const handleLogin = () => {
        history.push("/login")
    }

    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2").then(data => {
            console.log(">>>", data)
        })
    }, []);

    return (
        <div className='register-container '>
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

                        <div className='form-group'>
                            <label>Email: </label>
                            <input type='text' className='form-control' placeholder='Email address' />
                        </div>
                        <div className='form-group'>
                            <label>Phone number: </label>
                            <input type='text' className='form-control' placeholder='Phone number' />
                        </div>
                        <div className='form-group'>
                            <label>Password: </label>
                            <input type='password' className='form-control' placeholder='Password' />
                        </div>
                        <div className='form-group'>
                            <label>Re Enter Password: </label>
                            <input type='password' className='form-control' placeholder='Re Enter Password' />
                        </div>

                        <button className='btn btn-primary'>Register</button>

                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleLogin()}>
                                Already've an account. Login
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;