import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'reactstrap';
import configureRoutes from '../../config/routes';
import './Footer.scss';

import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
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
                        <p className="h4 pt-3 fw-bold px-2 text-white ms-xl-5">{t('discoverMore')}</p>
                        <ul className="list-groups ms-xl-5">
                            <a href={configureRoutes.store} className="list-group-item">
                                <FontAwesomeIcon icon={faLink} className="attach-icon" />
                                <span>{t('store')}</span>
                            </a>
                            <a href={configureRoutes.services} className="list-group-item p-text">
                                <FontAwesomeIcon icon={faLink} className="attach-icon" />
                                <span>{t('service')}</span>
                            </a>
                            <a href={configureRoutes.news} className="list-group-item p-text">
                                <FontAwesomeIcon icon={faLink} className="attach-icon" />
                                <span>{t('news')}</span>
                            </a>
                            <a href={configureRoutes.gallery} className="list-group-item p-text">
                                <FontAwesomeIcon icon={faLink} className="attach-icon" />
                                <span>{t('gallery')}</span>
                            </a>
                            <a href={configureRoutes.team} className="list-group-item p-text">
                                <FontAwesomeIcon icon={faLink} className="attach-icon" />
                                <span>{t('team')}</span>
                            </a>
                        </ul>
                    </Col>
                    <Col md="6" xl="3" sm="6" xs="6">
                        <p className="h4 pt-3 text-white fw-bold px-2">{t('support')}</p>
                        <ul className="list-groups">
                            <a href="#" className="list-group-item p-text">
                                <FontAwesomeIcon icon={faLink} className="attach-icon" />
                                <span>Tắm cho thú cưng</span>
                            </a>
                            <a href="#" className="list-group-item p-text">
                                <FontAwesomeIcon icon={faLink} className="attach-icon" />
                                <span>Kiểm tra sức khỏe</span>
                            </a>
                            <a href="#" className="list-group-item p-text">
                                <FontAwesomeIcon icon={faLink} className="attach-icon" />
                                <span>Lau khô</span>
                            </a>
                            <a href="#" className="list-group-item p-text">
                                <FontAwesomeIcon icon={faLink} className="attach-icon" />
                                <span>Chải lông</span>
                            </a>
                            <a href="#" className="list-group-item p-text">
                                <FontAwesomeIcon icon={faLink} className="attach-icon" />
                                <span>Spa</span>
                            </a>
                        </ul>
                    </Col>
                    <Col md="6" xl="3" className="px-0">
                        <p className="h4 pt-3 text-white fw-bold">{t('register')}</p>
                        <p className="mb-2 p-text">{t('describeRegister')}</p>
                        <div className="input-group">
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
