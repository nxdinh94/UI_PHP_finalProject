import './Admin.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

import configRoutes from '~/config/routes';

import { Logout } from '~/service/userService';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import HomeAdmin from '~/Pages/Admin/HomeAdmin';
import QLSP from '~/Pages/Admin/QLSP';
import EditQLSP from '~/Pages/Admin/QLSP/EditQLSP';
import AddQLSP from '~/Pages/Admin/QLSP/AddQLSP';

import QLTK from '~/Pages/Admin/QLTK';
import QLDV from '~/Pages/Admin/QLDV';
import AddQLDV from '~/Pages/Admin/QLDV/AddQLDV';
import EditQLDV from '~/Pages/Admin/QLDV/EditQLDV';
import DuyetDV from '~/Pages/Admin/DuyetDV';
import DuyetDonHang from '~/Pages/Admin/DuyetDonHang';
import DuyetThanhToanDichVu from '~/Pages/Admin/DuyetThanhToanDichVu';
import routes from '~/config/routes';

function Admin() {
    // const [isOpen, setIsOpen] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);
    const [isDropDownAccount, setIsDropDownAccount] = useState(false);

    let { slug } = useParams();
    const adminIn4String = sessionStorage.getItem('user_data');
    const adminIn4Object = JSON.parse(adminIn4String);

    let userData = '';
    let isLogin = sessionStorage.isLogin;
    let userId = '';
    if (isLogin) {
        userData = JSON.parse(sessionStorage.getItem('user_data'));
        isLogin = sessionStorage.isLogin;
        userId = userData.id;
    }

    const handleLogoutBtn = () => {
        Logout(userId);
        window.location.href = '/';
    };

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
                                <NavLink>&nbsp;</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={routes.adminHomePage}>Home Page</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={() => setIsDropDownAccount(!isDropDownAccount)}>
                                    Quản lý tài khoản
                                </NavLink>
                                {isDropDownAccount && (
                                    <NavItem className="ms-3">
                                        <NavLink href={routes.adminQltkPersonnel}>+ Tài khoản chức danh</NavLink>
                                        <NavLink href={routes.adminQltkUsers}>+ Tài khoản người dùng</NavLink>
                                    </NavItem>
                                )}
                            </NavItem>
                            <NavItem>
                                <NavLink href={routes.adminQlsp}>Quản lý sản phẩm</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href={configRoutes.adminQldv}>Quản lý dịch vụ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={routes.adminduyetdichvu}>Xét duyệt dịch vụ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={routes.duyetdonhang}>Duyệt đơn hàng</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="px-2" href={routes.thanhtoandichvu}>
                                    Duyệt đã thanh toán Dịch vụ
                                </NavLink>
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
                                <div className="avt-wrapper">
                                    <img src={adminIn4Object.thumbnail} />
                                </div>
                                <span>{adminIn4Object.fullname}</span>
                                {isDropdown && (
                                    <div className="dropdown-content2">
                                        <a href={configRoutes.home}>Home</a>
                                        <button
                                            onClick={() => {
                                                handleLogoutBtn();
                                            }}
                                        >
                                            Logout
                                        </button>
                                        <a href={configRoutes.profile}>Profile</a>
                                    </div>
                                )}
                            </div>
                        </nav>
                        <div className="wrapper-content">
                            <h3 style={{ color: '#5A5C69' }}>Tables</h3>
                            {slug === 'homepage' ? <HomeAdmin /> : <></>}
                            {slug.includes('qltk') ? <QLTK /> : <></>}
                            {slug === 'qlsp' ? <QLSP /> : <></>}

                            {slug === 'qldv' ? <QLDV /> : <></>}
                            {slug === 'duyetdichvu' ? <DuyetDV /> : <></>}
                            {slug.includes('qldv-edit') ? <EditQLDV /> : <></>}
                            {slug.includes('qldv-add') ? <AddQLDV /> : <></>}
                            {slug.includes('qlsp-edit') ? <EditQLSP /> : <></>}
                            {slug.includes('qlsp-add') ? <AddQLSP /> : <></>}
                            {slug.includes('duyetdonhang') ? <DuyetDonHang /> : <></>}
                            {slug.includes('duyetthanhtoandichvu') ? <DuyetThanhToanDichVu /> : <></>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Admin;
