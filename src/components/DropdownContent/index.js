import './DropdownContent.scss';
import configRoutes from '~/config/routes';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '~/components/Navbar/languageSlice';
import { Logout } from '~/service/userService';
function DropdownContent({ isAdmin }) {
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
            {isAdmin && <a href={configRoutes.adminHomePage}>{t('adminPage')}</a>}
            <a href={configRoutes.profile}>{t('profile')}</a>
            <a href={configRoutes.purchaseOrder}>{t('purchaseOrder')}</a>
            <button
                onClick={() => {
                    handleLogoutBtn();
                }}
            >
                {t('logout')}
            </button>
            <button className="btn-language" onClick={() => dispatch(changeLanguage())}>
                {language || 'vi'}
            </button>
        </div>
    );
}

export default DropdownContent;
