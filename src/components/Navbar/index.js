import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './Navbar.scss';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import DropdownContent from '~/components/DropdownContent';
import Image from '~/components/Image';
import configRoutes from '~/config/routes';
const logoOption = {
    lightLogo: '/images/logo/logo-light.png',
    darkLogo: '/images/logo/logo-dark.png',
};

function HeaderOnly({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [onColorChange, setOnColorChange] = useState(false);
    const [styleForSuperContainer, setStyleForSuperContainer] = useState({ backgroundColor: 'transparent' });
    const [styleForNavLink, setStyleForNavLink] = useState({ color: '#ffffff' });
    const [logo, setLogo] = useState(logoOption.lightLogo);
    const [isDropDown, setIsDropdown] = useState(false);
    const [isOnPageTag, setIsOnPageTag] = useState(false);
    const [cartQuantityClassName, setCartQuantityClassName] = useState('cart-quantity-toggle');

    const isLogin = sessionStorage.isLogin;
    let isAdmin = false;
    let avatar = '';
    if (isLogin) {
        const user_data = JSON.parse(sessionStorage.user_data);
        avatar = user_data.thumbnail;
        // check if user is admin
        user_data.decentralization_id === 1 ? (isAdmin = true) : (isAdmin = false);
    }
    const productQuantityInCart = useSelector((state) => state.cartSlices.value.quantityProductInCart);

    // const [language, setLanguage] = useState('vi');
    const language = useSelector((state) => state.language.value);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    useEffect(() => {
        if (onColorChange) {
            setStyleForSuperContainer((prev) => ({ ...prev, backgroundColor: '#ffffff' }));
            setStyleForNavLink((prev) => ({ ...prev, color: '#000000' }));
            setLogo(logoOption.darkLogo);
        } else {
            setStyleForSuperContainer((prev) => ({ ...prev, backgroundColor: 'transparent' }));
            setStyleForNavLink((prev) => ({ ...prev, color: '#ffffff' }));
            setLogo(logoOption.lightLogo);
        }
    }, [onColorChange]);

    useEffect(() => {
        if (isOpen) {
            setCartQuantityClassName('cart-quantity-toggle');
            setStyleForSuperContainer((prev) => ({ ...prev, backgroundColor: '#ffffff' }));
            setStyleForNavLink((prev) => ({ ...prev, color: '#000000' }));
            setLogo(logoOption.darkLogo);
        } else {
            setCartQuantityClassName('cart-quantity');
            if (!onColorChange) {
                setStyleForSuperContainer((prev) => ({ ...prev, backgroundColor: 'transparent' }));
                setStyleForNavLink((prev) => ({ ...prev, color: '#fff' }));
                setLogo(logoOption.lightLogo);
            }
        }
    }, [isOpen]);

    useEffect(() => {
        window.addEventListener('scroll', getOnScrollY);
        window.addEventListener('resize', getScreenResizeX);
        return () => {
            window.removeEventListener('scroll', getOnScrollY);
            window.removeEventListener('resize', getOnScrollY);
        };
    }, []);
    const getOnScrollY = () => {
        if (window.scrollY >= 80) {
            setOnColorChange(true);
        } else {
            setOnColorChange(false);
        }
    };
    const getScreenResizeX = () => {
        if (window.innerWidth < 768) {
            setIsOpen(false);
        }
        if (isOpen === true) {
            setLogo(logoOption.darkLogo);
            setStyleForSuperContainer((prev) => ({ ...prev, backgroundColor: '#ffffff' }));
            setStyleForNavLink((prev) => ({ ...prev, color: '#000000' }));
        }
    };

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={styleForSuperContainer}>
            <Container className="px-0">
                <Navbar color="faded" light expand="md" className="px-0">
                    <NavbarBrand href="/" className="px-0">
                        <Image src={logo} />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink style={styleForNavLink} href="/">
                                    {t('home')}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={styleForNavLink} href="/services">
                                    {t('service')}
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink style={styleForNavLink} href={configRoutes.news}>
                                    {t('news')}
                                </NavLink>
                            </NavItem>
                            <NavItem
                                onMouseLeave={() => setIsOnPageTag(false)}
                                onMouseOver={() => {
                                    setIsOnPageTag(true);
                                }}
                            >
                                <div className="pageTag">
                                    <NavLink style={styleForNavLink} href="#">
                                        {t('page')}
                                    </NavLink>
                                    {isOnPageTag && (
                                        <div className="dropdown-content">
                                            <a href={configRoutes.contact}>{t('contact')}</a>
                                            <a href={configRoutes.gallery}>{t('gallery')}</a>
                                            <a href={configRoutes.team}>{t('team')}</a>
                                        </div>
                                    )}
                                </div>
                            </NavItem>
                            <NavItem>
                                <NavLink style={styleForNavLink} href={configRoutes.store}>
                                    {t('store')}
                                </NavLink>
                            </NavItem>
                            {isLogin && (
                                <NavItem>
                                    <NavLink style={styleForNavLink} href={configRoutes.cart}>
                                        <FontAwesomeIcon icon={faCartPlus} className="nav-cart-icon" />
                                        <sup className={cartQuantityClassName}>{productQuantityInCart}</sup>
                                    </NavLink>
                                </NavItem>
                            )}

                            <NavItem>
                                <div
                                    className="user_profile"
                                    onMouseOver={() => {
                                        setIsDropdown(true);
                                    }}
                                    onMouseLeave={() => {
                                        setIsDropdown(false);
                                    }}
                                >
                                    {isDropDown && <DropdownContent isLogin={isLogin} isAdmin={isAdmin} />}
                                    <img src={avatar || '/images/favicon/apple-icon-57x57.png'} className="avt" />
                                </div>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
            <div>{children}</div>
        </div>
    );
}

export default HeaderOnly;
