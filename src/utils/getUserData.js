import checkLogin from '~/utils/checkLogin';

export default function getUserData() {
    const isLogin = checkLogin();
    if (isLogin) {
        return JSON.parse(sessionStorage.getItem('user_data'));
    } else return undefined;
}
