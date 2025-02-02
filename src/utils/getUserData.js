export default function getUserData() {
    return JSON.parse(sessionStorage.getItem('user_data'));
}
