import './Admin.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

import configRoutes from '~/config/routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import HomeAdmin from '~/Pages/Admin/HomeAdmin';
import QLSP from '~/Pages/Admin/QLSP';
import QLLSP from '~/Pages/Admin/QLLSP';

import routes from '~/config/routes';

function Admin() {
    // const [isOpen, setIsOpen] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);

    const [path, setPath] = useState(window.location.pathname);
    let { slug } = useParams();

    return (
        <div>
            <Container fluid className="admin">
                <Row className="wrapper-row">
                    <Col className="left-sidebar col-2">
                        <div className="logo">
                            <img src="/images/logo/logo-light.png" />
                        </div>
                        <Nav vertical>
                            <NavItem>
                                <NavLink href={routes.adminHomePage}>Home Page</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={routes.adminQlsq}>Quản lý sản phẩm</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={routes.adminQllsq}>Quản lý loại sản phẩm</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Xét duyệt hóa đơn</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Quản lý danh mục sản phẩm</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Quản lý banner</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Quản lý khuyến mãi</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col className="right-sidebar col-10">
                        <nav>
                            <button className="navItem">
                                <FontAwesomeIcon icon={faBell} />
                            </button>
                            <button className="navItem" href="/js/">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </button>
                            <div
                                className="divItem"
                                onMouseLeave={() => {
                                    setIsDropdown(false);
                                }}
                                onMouseOver={() => {
                                    setIsDropdown(true);
                                }}
                            >
                                <div className="avt-wrapper"></div>
                                <span>nxdinh94</span>
                                {isDropdown && (
                                    <div class="dropdown-content2">
                                        <a href={configRoutes.home}>Home</a>
                                        <button>Logout</button>
                                        <a href={configRoutes.profile}>Profile</a>
                                    </div>
                                )}
                            </div>
                        </nav>
                        <div className="wrapper-content">
                            <h3 style={{ color: '#5A5C69' }}>Tables</h3>
                            {slug === 'homepage' ? <HomeAdmin /> : <></>}
                            {slug === 'qlsp' ? <QLSP /> : <></>}
                            {slug === 'qllsp' ? <QLLSP /> : <></>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Admin;
