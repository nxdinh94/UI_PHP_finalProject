import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '~/components/Navbar/languageSlice';
import configRoutes from '~/config/routes';
import { Logout } from '~/service/userService';
import './DropdownContent.scss';
function DropdownContent({ isLogin, isAdmin }) {
    const language = useSelector((state) => state.language.value);
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

    let user_data = '';
    let userId = user_data.id;
    const handleLogoutBtn = async () => {
        await Logout(userId);
        window.location.href = '/';
    };
    return (
        <div className="dropdown-content">
            {isAdmin && isLogin && <a href={configRoutes.adminHomePage}>{t('adminPage')}</a>}
            {isLogin && <a href={configRoutes.profile}>{t('profile')}</a>}
            {isLogin && <a href={configRoutes.purchaseOrder}>{t('purchaseOrder')}</a>}
            {isLogin && <button onClick={handleLogoutBtn}>{t('logout')}</button>}
            {!isLogin && <a href={configRoutes.login}>Login</a>}
            {!isLogin && <a href={configRoutes.register}>Register</a>}
            <button className="btn-language" onClick={() => dispatch(changeLanguage())}>
                {language || 'vi'}
            </button>
        </div>
    );
}

export default DropdownContent;
