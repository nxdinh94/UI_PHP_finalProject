import { handleRegisterApi } from '~/service/userService';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toastify from '~/components/Toastify';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingIcon } from '../Login/index.tsx';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isHandlingRegister, setIsHandlingRegister] = useState(false);

    const navigate = useNavigate();

    const handleOnChangeInput = (e) => {
        switch (e.target.name) {
            case 'fullname':
                setFullName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'confirmPassword':
                setConfirmPassword(e.target.value);
                break;
            default:
                break;
        }
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
            <div className="content">
                <h1>ĐĂNG KÝ</h1>
                <div className="login-form">
                    <input
                        type="text"
                        onChange={handleOnChangeInput}
                        value={fullName}
                        name="fullname"
                        className="form-control"
                        placeholder="Tên đầy đủ"
                    />
                    <input
                        type="email"
                        onChange={handleOnChangeInput}
                        value={email}
                        name="email"
                        className="form-control"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        onChange={handleOnChangeInput}
                        value={password}
                        name="password"
                        className="form-control"
                        placeholder="Mật khẩu"
                    />

                    <input
                        type="password"
                        onChange={handleOnChangeInput}
                        value={confirmPassword}
                        name="confirmPassword"
                        className="form-control"
                        placeholder="Xác nhận mật khẩu"
                    />
                    <button
                        onClick={() => {
                            handleRegister(fullName, email, password, confirmPassword);
                        }}
                        className="btn-submit"
                    >
                        {isHandlingRegister && <LoadingIcon />}
                        &nbsp; ĐĂNG KÝ
                        <Toastify />
                    </button>

                    <br />
                    <div className="register-btn ps-0">
                        Bạn đã có tài khoản?
                        <a href="/login">
                            <i>Đăng nhập</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
