import { Fragment } from 'react';
import './AnotherLayout.scss';
import Navbar from '~/components/Navbar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import configRoutes from '~/config/routes';

function AnotherLayout({ children, isloginPage }) {
    const { t } = useTranslation();
    return (
        <Fragment>
            {!isloginPage && (
                <div className="alayout-wrapper">
                    <div className="banner">
                        <div className="navb">
                            <Navbar />
                        </div>
                        <div className="banner-title">
                            <div className="wrap-title">
                                <h1 className="title">{t('contactPage.title')}</h1>
                                <div className='d-flex'>
                                    <Link className='p-link' to={configRoutes.home}>{t('home')}</Link>
                                    <span>{' / ' + t('contactPage.title')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div>{children}</div>
        </Fragment>
    );
}

export default AnotherLayout;
