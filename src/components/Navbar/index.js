import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Fragment, useEffect, useState } from 'react';
import './Navbar.scss';
import {changeLanguage} from './languageSlice';
import ImageAssests from '~/assets/images';
import Image from '~/components/Image';
import { useSelector, useDispatch } from 'react-redux';

import { i18n } from 'i18next';

import { useTranslation } from 'react-i18next';

 
function HeaderOnly({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [onColorChange, setOnColorChange] = useState(false);
    // const [language, setLanguage] = useState('vi');
    const language = useSelector((state) => state.language.value);
    useEffect(()=>{
        i18n.changeLanguage(language);
    }, [language])
    const dispatch = useDispatch();
    

    const getOnScroll = () => {
        if (window.scrollY >= 80) {
            setOnColorChange(true);
        } else {
            setOnColorChange(false);
        }
    };
    window.addEventListener('scroll', getOnScroll);
    const toggle = () => setIsOpen(!isOpen);

    const { t, i18n } = useTranslation();
    

    return (
        <div className={onColorChange ? 'superContainer changeBgColor' : 'superContainer'}>
            <Container className="px-0">
                <Navbar color="faded" light expand="md" className="px-0">
                    <NavbarBrand href="/" className="px-0">
                        <Image src={onColorChange ? ImageAssests.darkLogo : ImageAssests.lightLogo} />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem className="navItem">
                                <NavLink style={{ color: onColorChange ? '#000' : '#fff' }} href="/">
                                    {t('home')}
                                </NavLink>
                            </NavItem>
                            <NavItem className="navItem">
                                <NavLink style={{ color: onColorChange ? '#000' : '#fff' }} href="/services">
                                    {t('service')}
                                </NavLink>
                            </NavItem>
                            <NavItem className="navItem">
                                <NavLink style={{ color: onColorChange ? '#000' : '#fff' }} href="/handbook">
                                    {t('handbook')}
                                </NavLink>
                            </NavItem>
                            <NavItem className="navItem">
                                <NavLink style={{ color: onColorChange ? '#000' : '#fff' }} href="/news">
                                    {t('news')}
                                </NavLink>
                            </NavItem>
                            <NavItem className="navItem">
                                <NavLink style={{ color: onColorChange ? '#000' : '#fff' }} href="/contact">
                                    {t('contact')}
                                </NavLink>
                            </NavItem>
                            <NavItem className="navItem">
                                <NavLink style={{ color: onColorChange ? '#000' : '#fff' }}>
                                    <button className={onColorChange? 'btn-language scroll': 'btn-language'}onClick={() => dispatch(changeLanguage())}>
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
