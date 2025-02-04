import './Login.scss';
import { faEye, faEyeSlash, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { handleLoginApi } from '~/service/userService';

import { toast } from 'react-toastify';
import Toastify from '~/components/Toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isHandlingLogin, setIsHandlingLogin] = useState(false);
    const [isShowPassWord, setIsShowPassword] = useState(false);

    const navigate = useNavigate();
    const btnRef = useRef();

    const handleLogin = async (emaill, passwordd) => {
        setIsHandlingLogin(true);
        let res = await handleLoginApi(emaill, passwordd);
        // console.log(res);
        setTimeout(() => {
            setIsHandlingLogin(false);
        }, 800);

        if (res.status) {
            const userData = res.user_data;
            sessionStorage.setItem('user_data', JSON.stringify(userData));
            sessionStorage.setItem('isLogin', res.status);
            toast.success(res.message);
            setTimeout(() => {
                toast.success('Đưa bạn về trang chủ sau 3s');
            }, 500);
            setTimeout(() => {
                navigate('/');
            }, 2500);
        } else {
            toast.error(res.message);
            sessionStorage.setItem('user_data', '{}');
            sessionStorage.setItem('isLogin', res.status);
        }
    };

    const handleOnChangeInput = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    };
    return (
        <div className="app">
            <Toastify />
            <div className="content">
                <h1>ĐĂNG NHẬP</h1>
                <div className="login-form">
                    <input
                        type="email"
                        onChange={handleOnChangeInput}
                        value={email}
                        name="email"
                        className="form-control"
                        placeholder="Email"
                    />
                    <div className="wrapper-password">
                        <input
                            type={isShowPassWord ? 'text' : 'password'}
                            onChange={handleOnChangeInput}
                            value={password}
                            name="password"
                            className="form-control"
                            placeholder="Mật khẩu"
                        />
                        <span className="m-0 p-0" onClick={() => setIsShowPassword(!isShowPassWord)}>
                            {isShowPassWord ? <CloseEyeIcon /> : <OpenEyeIcon />}
                        </span>
                    </div>

                    <button
                        ref={btnRef}
                        onClick={() => handleLogin(email, password)}
                        className="btn-submit"
                        type="submit"
                    >
                        {isHandlingLogin && <LoadingIcon />} &nbsp; ĐĂNG NHẬP
                    </button>
                    <button className="forgot-pass"> Quên mật khẩu</button>
                    <br />
                    <div className="register-btn">
                        Bạn chưa có tài khoản?
                        <a href="/register">
                            <i>Đăng ký</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export function LoadingIcon() {
    return <FontAwesomeIcon icon={faSpinner} spin size="sm" />;
}
function OpenEyeIcon() {
    return <FontAwesomeIcon icon={faEye} className="show-hide-pass" />;
}
function CloseEyeIcon() {
    return <FontAwesomeIcon icon={faEyeSlash} className="show-hide-pass" />;
}
export default Login;
