import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '~/components/Navbar';
import './HomeLayout.scss';
import { useTranslation } from 'react-i18next';

import Footer from '../../Footer';

function HomeLayout({ children }) {
    //Translatetion
    const { t } = useTranslation();

    return (
        <div className="homeLayout-wrapper">
            <div className="homeLayout-banner">
                <div className="navb">
                    <Navbar />
                </div>
                <Container>
                    <Row>
                        <Col md="8" lg="8" className="px-0">
                            <div className="textContainer">
                                <div>
                                    <p className="slogan">{t('slogan')}</p>
                                </div>
                                <div>
                                    <p className="heH1">{t('slogan2')}</p>
                                </div>
                                <div className="">
                                    <p className="idiom">{t('idiom')}</p>
                                </div>
                                <button className="contactBtn">
                                    <a href="/contact" className="text-white">
                                        {t('contactnow')}
                                    </a>
                                </button>
                            </div>
                        </Col>
                        <Col md="4" lg="4" className="px-0"></Col>
                    </Row>
                </Container>
            </div>
            <div className="homeLayout-body">{children}</div>

            <div className="homeLayout-footer">
                <Footer />
            </div>
        </div>
    );
}

export default HomeLayout;
