// import './Register.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { handleRegisterApi } from '~/service/userService';

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
    const [isHandlingRegister, setIsHandlingRegister] = useState(false);

    const navigate = useNavigate();

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

    const handleRegister = async (fullname, mail, pass, rePassword) => {
        setIsHandlingRegister(true);
        const res = await handleRegisterApi(fullname, mail, pass, rePassword);
        setIsHandlingRegister(false);
        if (res.status) {
            toast.success(res.message);
            toast.success('Giờ thì đăng nhập nhé!!');
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        } else {
            const error = { ...res };
            Object.keys(error).map((item, index) => toast.error(res[item]));
        }
    };

    return (
        <div className="app">
            <div className="block">
                <div className="content">
                    <h1>ĐĂNG KÝ</h1>
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
                        <button
                            onClick={() => {
                                handleRegister(fullName, email, password, rePassword);
                            }}
                            className="btn-submit"
                        >
                            {isHandlingRegister && (
                                <FontAwesomeIcon
                                    icon={faSpinner}
                                    spin
                                    size="sm"
                                    style={{ '--fa-primary-color': '#cd0aa9', '--fa-secondary-color': '#cd0aa9' }}
                                />
                            )}
                            &nbsp; ĐĂNG KÝ
                            <Toastify />
                        </button>

                        <br />
                        <div className="register-btn ps-0">
                            Bạn đã có tài khoản? <a href="/login"> Đăng nhập</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
