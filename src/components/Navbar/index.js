import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment, useState } from 'react';
import styles from './Navbar.scss';

import ImageAssests from '~/assets/images';
import Image from '~/components/Image';


function HeaderOnly({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [onColorChange, setOnColorChange] = useState(false);
    const getOnScroll = () => {
        if (window.scrollY >= 80) {
            setOnColorChange(true);
        } else {
            setOnColorChange(false);
        }
    };
    window.addEventListener('scroll', getOnScroll);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className={onColorChange ? 'superContainer changeBgColor' : 'superContainer'}>
            <Container className="px-0">
                <Navbar color="faded" light expand="md" className="px-0">
                    <NavbarBrand href="/" className="px-0">
                        <Image src={onColorChange ? ImageAssests.darkLogo : ImageAssests.lightLogo} />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem className="navItem">
                                <NavLink style={{ color: onColorChange ? '#000' : '#fff' }} href="/">
                                    Trang chủ
                                </NavLink>
                            </NavItem>
                            <NavItem className="navItem">
                                <NavLink style={{ color: onColorChange ? '#000' : '#fff' }} href="/services">
                                    Dịch vụ
                                </NavLink>
                            </NavItem>
                            <NavItem className="navItem">
                                <NavLink style={{ color: onColorChange ? '#000' : '#fff' }} href="/handbook">
                                    Cẩm nang
                                </NavLink>
                            </NavItem>
                            <NavItem className="navItem">
                                <NavLink style={{ color: onColorChange ? '#000' : '#fff' }} href="/news">
                                    Tin tức
                                </NavLink>
                            </NavItem>
                            <NavItem className="navItem">
                                <NavLink style={{ color: onColorChange ? '#000' : '#fff' }} href="/contact">
                                    Liên hệ
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
