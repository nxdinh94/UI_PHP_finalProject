import { Fragment } from 'react';
import './AnotherLayout.scss';
import Navbar from '~/components/Navbar';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import configRoutes from '~/config/routes';
import Footer from '../../Footer';

function AnotherLayout({ children }) {
    const { t } = useTranslation();
    return (
        <Fragment>
            <Container fluid className="alayout-wrapper">
                <div className="banner">
                    <div className="navb">
                        <Navbar />
                    </div>
                    <div className="banner-title">
                        <div className="wrap-title">
                            <h1 className="title">{t('contactPage.title')}</h1>
                            <div className="d-flex">
                                <Link className="p-link" to={configRoutes.home}>
                                    {t('home')}
                                </Link>
                                <span>{' / ' + t('contactPage.title')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="another-layout-content">{children}</div>

                <div className="homeLayout-footer">
                    <Footer />
                </div>
            </Container>
        </Fragment>
    );
}

export default AnotherLayout;
