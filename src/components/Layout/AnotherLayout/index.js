import { Fragment, useEffect, useState } from 'react';
import './AnotherLayout.scss';
import Navbar from '~/components/Navbar';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import configRoutes from '~/config/routes';
import Footer from '../../Footer';

function AnotherLayout({ children }) {
    let isLoginPage = false;
    const loginURL = window.location.pathname;
    if (loginURL === '/login' || loginURL === '/register' || loginURL === '/admin') {
        isLoginPage = true;
    }
    const { t } = useTranslation();

    const pathName = window.location.pathname;
    let headtitle = t('contact');
    if (pathName === '/services') {
        headtitle = t('service');
    }
    if (pathName.substring(0, 5) === '/news') {
        headtitle = t('news');
    }
    if (pathName === '/store') {
        headtitle = t('store');
    }
    if (pathName === '/gallery') {
        headtitle = t('gallery');
    }
    if (pathName === '/team') {
        headtitle = t('team');
    }
    return (
        <Fragment>
            <Container fluid className="alayout-wrapper">
                {!isLoginPage && (
                    <div className="banner">
                        <div className="navb">
                            <Navbar />
                        </div>
                        <div className="banner-title">
                            <div className="wrap-title">
                                <h1 className="title">{headtitle}</h1>
                                <div className="d-flex">
                                    <Link className="p-link" to={configRoutes.home}>
                                        {t('home')}
                                    </Link>
                                    <span>{' / ' + headtitle}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="another-layout-content">{children}</div>

                {!isLoginPage && (
                    <div className="homeLayout-footer">
                        <Footer />
                    </div>
                )}
            </Container>
        </Fragment>
    );
}

export default AnotherLayout;
