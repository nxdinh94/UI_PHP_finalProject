import './Register.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { handleLoginApi } from '~/service/userService';

import { toast } from 'react-toastify';
import Toastify from '~/components/Toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleOnChangePass = (e) => {
        setPassword(e.target.value);
    };
    const handleOnChangeFullName = (e) => {
        setFullName(e.target.value);
    };
    const handleOnChangeRePass = (e) => {
        setRePassword(e.target.value);
    };

    return (
        <div className="app">
            <div className="block">
                <div className="content">
                    <h1>ĐĂNG NHẬP</h1>
                    <div className="login-form">
                        <input
                            type="text"
                            onChange={handleOnChangeFullName}
                            value={fullName}
                            name="fullname"
                            className="form-control"
                            placeholder="Tên đầy đủ"
                        />
                        <input
                            type="email"
                            onChange={handleOnChangeEmail}
                            value={email}
                            name="email"
                            className="form-control"
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            onChange={handleOnChangePass}
                            value={password}
                            name="password"
                            className="form-control"
                            placeholder="Mật khẩu"
                        />

                        <input
                            type="password"
                            onChange={handleOnChangeRePass}
                            value={rePassword}
                            name="password"
                            className="form-control"
                            placeholder="Xác nhận mật khẩu"
                        />
                        <button className="btn-submit" type="submit">
                            ĐĂNG NHẬP
                            <Toastify />
                        </button>
                        <button className="forgot-pass"> Quên mật khẩu</button>
                        <br />
                        <div className="register-btn">
                            Bạn chưa có tài khoản? <a href="register.html"> Đăng ký</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
