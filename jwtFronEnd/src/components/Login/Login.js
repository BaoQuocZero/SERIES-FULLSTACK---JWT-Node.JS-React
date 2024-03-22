import React from 'react';
import './Login.scss';

const Login = () => {
    return (
        <div className='login-container mt-3'>
            <div className='container'>
                <div className='row'>

                    <div className='content-left col-7 d-none d-sm-block'>
                        <div className='brand'>
                            Hoi dan it
                        </div>
                        <div className='detail'>
                            Mọi khóa học trên Udemy, mình sẽ không pubic mà chuyển qua private, bạn nào quan tâm về khóa Fullstack JWT (json web token), Node.js và React thì:
                        </div>
                    </div>

                    <div className='content-right col-10 col-sm-5 d-flex flex-column gap-3 py-3'>
                        <input type='text' className='form-control' placeholder='Email address or phone number' />
                        <input type='password' className='form-control' placeholder='Password' />
                        <button className='btn btn-primary'>Login</button>
                        <span className='text-center'>Fogotten password?</span>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success'>Create new accourt</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;