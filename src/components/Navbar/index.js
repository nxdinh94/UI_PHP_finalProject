import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import configRoutes from '~/config/routes';

import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { Logout } from '~/service/userService';

import { changeLanguage } from './languageSlice';

import Image from '~/components/Image';
import { useSelector, useDispatch } from 'react-redux';

import { useTranslation } from 'react-i18next';
import routes from '~/config/routes';

const logoOption = {
    lightLogo: '/images/logo/logo-light.png',
    darkLogo: '/images/logo/logo-dark.png',
};

function HeaderOnly({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [onColorChange, setOnColorChange] = useState(false);
    const [classNameSuperContainer, setclassNameSuperContainer] = useState('superContainer');
    const [styleForNavLink, setStyleForNavLink] = useState({ color: '#fff' });
    const [logo, setLogo] = useState(logoOption.lightLogo);
    const [isDropdown, setIsDropdown] = useState(false);
    const [isOnPageTag, setIsOnPageTag] = useState(false);
    const [avatar, setAvatar] = useState('');
    const [isAdmin, setIsAdmin] = useState(true);

    const isLogin = sessionStorage.isLogin;

    // const [language, setLanguage] = useState('vi');
    const language = useSelector((state) => state.language.value);

    const { t, i18n } = useTranslation();

    useEffect(() => {
        if (isLogin) {
            const user_data = JSON.parse(sessionStorage.user_data);
            setAvatar(user_data.thumbnail);
            const decentralization_id = user_data.decentralization_id;
            if (decentralization_id === 1) {
                setIsAdmin(true);
            } else setIsAdmin(false);
        }
    }, []);
    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (onColorChange) {
            setclassNameSuperContainer((prev) => (prev += ' changeBgColor'));
            setStyleForNavLink((prev) => ({ ...prev, color: '#000000' }));
            setLogo(logoOption.darkLogo);
        } else {
            if (isOpen === false) {
                setclassNameSuperContainer('superContainer');
                setStyleForNavLink((prev) => ({ ...prev, color: '#fff' }));
                setLogo(logoOption.lightLogo);
            }
        }
    }, [onColorChange]);

    useEffect(() => {
        if (isOpen) {
            setclassNameSuperContainer((prev) => (prev += ' changeBgColor'));
            setStyleForNavLink((prev) => ({ ...prev, color: '#000000' }));
            setLogo(logoOption.darkLogo);
        } else {
            setclassNameSuperContainer('superContainer');
            setStyleForNavLink((prev) => ({ ...prev, color: '#fff' }));
            setLogo(logoOption.lightLogo);
        }
    }, [isOpen]);

    useEffect(() => {
        window.addEventListener('scroll', getOnScrollY);
        window.addEventListener('resize', getScreenResizeX);
        return () => {
            window.removeEventListener('scroll', getOnScrollY);
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
        if (
            (window.innerWidth >= 768 && isOpen === false && onColorChange === false) ||
            (window.innerWidth >= 768 && isOpen === false && onColorChange === false)
        ) {
            setclassNameSuperContainer('superContainer');
            setStyleForNavLink((prev) => ({ ...prev, color: '#fff' }));
            setLogo(logoOption.lightLogo);
            console.log('jiihi');
        }
        if (window.innerWidth < 768) {
            setIsOpen(false);
        }
    };
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLogoutBtn = () => {
        Logout();
        window.location.href = '/';
    };

    return (
        <div className={classNameSuperContainer}>
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
                                            <a href={configRoutes.store}>{t('store')}</a>
                                            <a href={configRoutes.gallery}>{t('gallery')}</a>
                                            <a href={configRoutes.team}>{t('team')}</a>
                                        </div>
                                    )}
                                </div>
                            </NavItem>
                            <NavItem>
                                <NavLink style={styleForNavLink} href="/contact">
                                    {t('contact')}
                                </NavLink>
                            </NavItem>
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
                                    {(isDropdown && !isLogin && (
                                        <div className="dropdown-content">
                                            <a href={configRoutes.login}>Login</a>
                                            <a href={configRoutes.register}>Register</a>
                                            <button className="btn-language" onClick={() => dispatch(changeLanguage())}>
                                                {language || 'vi'}
                                            </button>
                                        </div>
                                    )) ||
                                        (isDropdown && isLogin && (
                                            <div className="dropdown-content">
                                                {isAdmin && <a href={routes.adminHomePage}>Admin Page</a>}
                                                <a href={configRoutes.profile}>Profile</a>
                                                <button
                                                    onClick={() => {
                                                        handleLogoutBtn();
                                                    }}
                                                >
                                                    Logout
                                                </button>
                                                <button
                                                    className="btn-language"
                                                    onClick={() => dispatch(changeLanguage())}
                                                >
                                                    {language || 'vi'}
                                                </button>
                                            </div>
                                        ))}

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
