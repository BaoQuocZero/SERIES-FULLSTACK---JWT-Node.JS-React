import React from 'react';
import './Login.scss';

const Login = () => {
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

                        <input type='text' className='form-control' placeholder='Email address or phone number' />
                        <input type='password' className='form-control' placeholder='Password' />
                        <button className='btn btn-primary'>Login</button>
                        <span className='text-center'>
                            <a className='fogot-password' href='#'>Fogotten password?</a>
                        </span>
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