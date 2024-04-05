import './Register.scss';

import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let history = useHistory();
    const handleLogin = () => {
        history.push("/login")
    }

    useEffect(() => {
        // axios.get("http://localhost:8080/api/test-api").then(data => {
        //     console.log(">>>", data)
        // })
    }, []);

    const handleRegister = () => {
        let userData = { email, phone, username, password }
        console.log(">>>>>", userData)
    }

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
                            <input type='email' className='form-control' placeholder='Email address'
                                value={email} onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Phone number: </label>
                            <input type='text' className='form-control' placeholder='Phone number'
                                value={phone} onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Password: </label>
                            <input type='password' className='form-control' placeholder='Password'
                                value={password} onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Re Enter Password: </label>
                            <input type='password' className='form-control' placeholder='Re Enter Password'
                                value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>

                        <button className='btn btn-primary' onClick={() => handleRegister()}>Register</button>

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