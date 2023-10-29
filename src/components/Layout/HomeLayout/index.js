import { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '~/components/Navbar';
import './HomeLayout.scss';

function HomeLayout({ children }) {
    return (
        <div className="homeLayout-wrapper">
            <div className="homeLayout-banner">
                <div className="navb">
                    <Navbar />
                </div>
                <Container>
                    <Row>
                        <Col md="7" className="px-0">
                            <div className="textContainer">
                                <div>
                                    <p className="slogan">Chúng ta yêu thú cưng !!!</p>
                                </div>
                                <div>
                                    <p className="heH1">Tôi luôn sẵn sàng chăm sóc thú cưng của bạn!</p>
                                </div>
                                <div className="">
                                    <p className="idiom">
                                        Chó là điều duy nhất trên trái đất yêu bạn hơn yêu chính nó - Josh Billings
                                    </p>
                                </div>
                                <button className="contactBtn">
                                    <a href="/contact" className="text-white">
                                        Liên hệ ngay
                                    </a>
                                </button>
                            </div>
                        </Col>
                        <Col md="5" className="px-0"></Col>
                    </Row>
                </Container>
            </div>
            {children}
        </div>
    );
}

export default HomeLayout;
