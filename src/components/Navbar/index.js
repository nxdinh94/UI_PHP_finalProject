import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import configRoutes from '~/config/routes';

import React, { Fragment, useEffect, useState } from 'react';
import './Navbar.scss';
import { changeLanguage } from './languageSlice';
import Image from '~/components/Image';
import { useSelector, useDispatch } from 'react-redux';

import { useTranslation } from 'react-i18next';

const logoOption = {
    lightLogo: 'https://nxdinh94.github.io/dacs1/img/logo-light.png',
    darkLogo: 'https://nxdinh94.github.io/dacs1/img/logo-dark.png',
};

function HeaderOnly({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [onColorChange, setOnColorChange] = useState(false);
    const [classNameSuperContainer, setclassNameSuperContainer] = useState('superContainer');
    const [styleForNavLink, setStyleForNavLink] = useState({ color: '#fff' });
    const [logo, setLogo] = useState(logoOption.lightLogo);
    const [btnLanguage, setBtnLanguage] = useState('btn-language');

    // const [language, setLanguage] = useState('vi');
    const language = useSelector((state) => state.language.value);
    console.log('language', language);

    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (onColorChange) {
            setclassNameSuperContainer((prev) => (prev += ' changeBgColor'));
            setStyleForNavLink((prev) => ({ ...prev, color: '#000000' }));
            setLogo(logoOption.darkLogo);
            setBtnLanguage((prev) => (prev += ' scroll'));
        } else {
            if (isOpen === false) {
                setclassNameSuperContainer('superContainer');
                setStyleForNavLink((prev) => ({ ...prev, color: '#fff' }));
                setLogo(logoOption.lightLogo);
                setBtnLanguage('btn-language');
            }
        }
    }, [onColorChange]);

    useEffect(() => {
        if (isOpen) {
            setclassNameSuperContainer((prev) => (prev += ' changeBgColor'));
            setStyleForNavLink((prev) => ({ ...prev, color: '#000000' }));
            setLogo(logoOption.darkLogo);
            setBtnLanguage((prev) => (prev += ' scroll'));
        } else {
            setclassNameSuperContainer('superContainer');
            setStyleForNavLink((prev) => ({ ...prev, color: '#fff' }));
            setLogo(logoOption.lightLogo);
            setBtnLanguage('btn-language');
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
            setBtnLanguage('btn-language');
            console.log('jiihi');
        }
        if (window.innerWidth < 768) {
            setIsOpen(false);
        }
    };
    const toggle = () => {
        setIsOpen(!isOpen);
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
                                <NavLink style={styleForNavLink} href="/handbook">
                                    {t('handbook')}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={styleForNavLink} href={configRoutes.news}>
                                    {t('news')}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={styleForNavLink} href="/contact">
                                    {t('contact')}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={styleForNavLink}>
                                    <button className={btnLanguage} onClick={() => dispatch(changeLanguage())}>
                                        {language || 'vi'}
                                    </button>
                                </NavLink>
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
