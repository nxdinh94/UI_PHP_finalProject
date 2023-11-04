import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Footer.scss';
import configRouts from '../../config/routes';
function Footer() {
    return (
        <Container fluid className="footer-wrapper">
            <Container>
                <Row>
                    <Col md="6" xl="3">
                        <a href="#" className="navbar-brand">
                            <img src="/images/logo/logo-light.png" alt="alternative" />
                        </a>
                        <p className="promisee mt-3 p-text">
                            Trang web <i className="text-white">Pettu</i> mang đến cho quý khách hàng các dịch vụ chăm
                            sóc thú cưng tiên tiến nhất, cùng với đội ngũ nhân viên chuyên nghiệp, hứa hẹn mang đến cho
                            quý khách sự hài lòng tuyệt đối.
                        </p>
                    </Col>
                    <Col md="6" xl="3" sm="6" xs="6">
                        <p className="h4 pt-3 fw-bold px-2 text-white ms-xl-5">Khám phá</p>
                        <ul className="list-groups ms-xl-5">
                            <Link to={configRouts.handbook} className="list-group-item p-text">
                                Cẩm nang
                            </Link>
                            <Link to={configRouts.services} className="list-group-item p-text">
                                Dịch vụ
                            </Link>
                            <Link to={configRouts.news} className="list-group-item p-text">
                                Tin tức
                            </Link>
                            <Link className="list-group-item p-text">Gallery</Link>
                            <Link className="list-group-item p-text">Team</Link>
                        </ul>
                    </Col>
                    <Col md="6" xl="3" sm="6" xs="6">
                        <p className="h4 pt-3 text-white fw-bold px-2">Ủng hộ</p>
                        <ul className="list-groups">
                            <li className="list-group-item p-text">Tắm cho thú cưng</li>
                            <li className="list-group-item p-text">Kiểm tra sức khỏe</li>
                            <li className="list-group-item p-text">Lau khô</li>
                            <li className="list-group-item p-text">Chải lông</li>
                            <li className="list-group-item p-text">Spa</li>
                        </ul>
                    </Col>
                    <Col md="6" xl="3">
                        <p className="h4 pt-3 text-white fw-bold px-2">Đăng kí</p>
                        <p className="px-3 mb-0 p-text">
                            Đăng ký tài khoản để nhận những thông tin hữu ích từ chúng tôi.
                        </p>
                        <div className="input-group px-3">
                            <input type="text" className="form-control my-0" placeholder="Nhập email tại đây" />
                            <button className="btn btn-success" type="button">
                                Go
                            </button>
                        </div>
                    </Col>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="d-flex copy-right_section justify-content-between flex-wrap">
                                <div className="copy-right text-white ">
                                    <p>Copyright Petvn@. ALL Rights Reserved</p>
                                </div>
                                <div className="credit">
                                    <img src="/images/credit-cards.png" alt="alternative" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                </Row>
            </Container>
        </Container>
    );
}

export default Footer;
