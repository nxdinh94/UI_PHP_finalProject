import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import React, { useEffect, useState } from 'react';
import Slider from '../../components/Slider';
import './Home.scss';
import { getAllPetsAction } from '../../actions';
import Swiper from '~/components/Swiper';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import routes from '~/config/routes';
var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

function Home() {
    const [handleDataPet, setHandleDataPet] = useState([]);
    const [handleDataTeam, setHandleDataTeam] = useState([]);
    const { t } = useTranslation();
    const teamData = useSelector((state) => state.teamSlices.value);
    const serviceData = useSelector((state) => state.servicesSlices.value);
    let userData = '';
    let isLogin = sessionStorage.isLogin;
    let userId = '';
    if (isLogin) {
        userData = JSON.parse(sessionStorage.getItem('user_data'));
        isLogin = sessionStorage.isLogin;
        userId = userData.id;
    }
    const [openQuestionGuide, setOpenQuestionGuide] = useState(Array(5).fill(false));

    useEffect(() => {
        const fetchAllPets = async () => {
            try {
                const petsData = await getAllPetsAction();
                setHandleDataPet(petsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchAllPets();
    }, []);
    useEffect(() => {
        setHandleDataTeam(teamData);
    }, [teamData]);
    const handleToggleQuestionGuide = (key) => {
        const newState = [...openQuestionGuide];

        if (newState[key]) {
            newState.fill(false);
        } else {
            newState.fill(false);
            newState[key] = !newState[key];
        }

        setOpenQuestionGuide(newState);
    };

    return (
        <Container fluid className="px-0">
            <div className="container">
                <Row className="my-5">
                    <Col md="12" lg="6">
                        <div className="w-image">
                            <div className="img">
                                <img
                                    className="img-fluid"
                                    loading="lazy"
                                    src="/images/about/header-image-2.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </Col>
                    <Col md="12" lg="6">
                        <div className="title d-flex">
                            <img
                                src={'/images/icons8/icons8-cat-footprint-16.png'}
                                alt="alternation"
                                loading="lazy"
                                className="iconCat"
                            />
                            <span className="topic1">{t('weProvided')}</span>
                        </div>
                        <h2 className="topic2">{t('weAreTheBest')}</h2>
                        <p className="p-text">{t('describeWeAreTheBest')}</p>
                        <ul className="w-list">
                            <li>
                                <p className="p-text-item">{t('weAreTheBestItem1')}</p>
                            </li>
                            <li>
                                <p className="p-text-item">{t('weAreTheBestItem2')}</p>
                            </li>
                            <li>
                                <p className="p-text-item">{t('weAreTheBestItem3')}</p>
                            </li>
                            <li>
                                <p className="p-text-item">{t('weAreTheBestItem4')}</p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="container-fluid" style={{ backgroundColor: '#F7F7F5', padding: '10px 0px' }}>
                <div className="container">
                    <Row className="py-5">
                        <Col md="12" lg="6">
                            <div className="checkin-img">
                                <img src="/images/about/about-image.png" alt="alternative" className="img-fluid" />
                            </div>
                        </Col>
                        <Col md="12" lg="6">
                            <div className="checkin">
                                <p className="my-1">
                                    <img className="iconCat" src={'/images/icons8/icons8-cat-footprint-16.png'} />
                                    <span className="topic1">{t('checkinTime')}</span>
                                </p>
                                <h2 className="topic2">{t('wealwaysbringHappyness')}</h2>
                                <div>
                                    <p className="p-text">{t('describewealwaysbringHappyness')}</p>
                                </div>

                                <ul className="checkin-list">
                                    <li className="checkin-item">
                                        <p className="h5 p-text-item">{`${t('from')} 9:00 ${t('to')} 21:00`}</p>
                                        <p className="checkin-script p-text">{t('text1')}</p>
                                    </li>
                                    <li className="checkin-item">
                                        <p className="h5 p-text-item">{t('emergencyService')}</p>
                                        <p className="checkin-script p-text">{t('text2')}</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="container-fluid">
                <div className="decor">
                    <div className="container">
                        <div className="row">
                            <div className="col-12"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Row className="my-5">
                    <Col lg="12" className="section-share ">
                        <div className="slider-title">
                            <p>
                                <img className="iconCat" src={'/images/icons8/icons8-cat-footprint-16.png'} />
                                <span className="topic1">{t('expertTeam')}</span>
                            </p>
                            <h2 className="topic2">{t('expertTeam')}</h2>
                        </div>
                        <Swiper teamData={handleDataTeam} />
                    </Col>
                </Row>
            </div>
            <div className="ask-question-wrapper container">
                <Row>
                    <Col md="5">
                        <div className="ask-question-right">
                            <p className="topic1">Asked Questions</p>
                            <h2 className="topic2" style={{ fontFamily: 'oswald', fontSize: '4rem' }}>
                                We are always
                                <br />
                                Ready for your
                                <br />
                                Any question
                            </h2>
                            <p className="p-text my-4">
                                Please ask any questions you have about us, we are happy to answer your questions. Go to
                                the contact page now!!!
                            </p>
                            <div className="btn-area">
                                <button
                                    onClick={() => {
                                        window.location.href = '/contact';
                                    }}
                                    className="btn-discover"
                                >
                                    {t('contactnow')}
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col md="7" className="p-4">
                        <div className="ask-question-left" key="0">
                            <div
                                className="item-open"
                                onClick={() => {
                                    handleToggleQuestionGuide(0);
                                }}
                            >
                                How to contact with our customer featire?
                            </div>
                            {openQuestionGuide[0] && (
                                <div
                                    className="item-toggle p-text"
                                    style={{ animation: `${openQuestionGuide[0] ? 'fadeIn' : 'fadeOut'} 1s` }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat explicabo, animi
                                    soluta veniam aspernatur ut iusto incidunt hic quas sequi dolores neque quis, sit
                                    odit minima modi nemo.
                                </div>
                            )}
                        </div>
                        <div className="ask-question-left" key="1">
                            <div
                                className="item-open"
                                onClick={() => {
                                    handleToggleQuestionGuide(1);
                                }}
                            >
                                Is there any customer pricing system?
                            </div>
                            {openQuestionGuide[1] && (
                                <div
                                    className="item-toggle p-text"
                                    style={{ animation: `${openQuestionGuide[1] ? 'fadeIn' : 'fadeOut'} 1s` }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat explicabo, animi
                                    soluta veniam aspernatur ut iusto incidunt hic quas sequi dolores neque quis, sit
                                    odit minima modi nemo.
                                </div>
                            )}
                        </div>
                        <div className="ask-question-left" key="2">
                            <div
                                className="item-open"
                                onClick={() => {
                                    handleToggleQuestionGuide(2);
                                }}
                            >
                                Where is the edit options on deshboard?
                            </div>
                            {openQuestionGuide[2] && (
                                <div
                                    className="item-toggle p-text"
                                    style={{ animation: `${openQuestionGuide[2] ? 'fadeIn' : 'fadeOut'} 1s` }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat explicabo, animi
                                    soluta veniam aspernatur ut iusto incidunt hic quas sequi dolores neque quis, sit
                                    odit minima modi nemo.
                                </div>
                            )}
                        </div>
                        <div className="ask-question-left" key="3">
                            <div
                                className="item-open"
                                onClick={() => {
                                    handleToggleQuestionGuide(3);
                                }}
                            >
                                How to update the latest version?
                            </div>
                            {openQuestionGuide[3] && (
                                <div
                                    className="item-toggle p-text"
                                    style={{ animation: `${openQuestionGuide[3] ? 'fadeIn' : 'fadeOut'} 1s` }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat explicabo, animi
                                    soluta veniam aspernatur ut iusto incidunt hic quas sequi dolores neque quis, sit
                                    odit minima modi nemo.
                                </div>
                            )}
                        </div>
                        <div className="ask-question-left" key="4">
                            <div
                                className="item-open"
                                onClick={() => {
                                    handleToggleQuestionGuide(4);
                                }}
                            >
                                How to contact with our customer featire?
                            </div>
                            {openQuestionGuide[4] && (
                                <div
                                    className="item-toggle p-text"
                                    style={{ animation: `${openQuestionGuide[4] ? 'fadeIn' : 'fadeOut'} 1s` }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat explicabo, animi
                                    soluta veniam aspernatur ut iusto incidunt hic quas sequi dolores neque quis, sit
                                    odit minima modi nemo.
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="container mb-5">
                <Row>
                    <Col lg="12" className="section-share ">
                        <div className="slider-title">
                            <p>
                                <img className="iconCat" src={'/images/icons8/icons8-cat-footprint-16.png'} />
                                <span className="topic1">{t('petInf.potm')}</span>
                            </p>
                            <h2 className="topic2">{t('petInf.potm')}</h2>
                        </div>
                        <Slider settings={settings} dataPet={handleDataPet}></Slider>
                    </Col>
                </Row>
            </div>
            <div className="post-pet-care container">
                <div className="post-pet-care-header">
                    <Row>
                        <Col lg="6" className="slider-title text-start">
                            <p className="mb-0">
                                <img className="iconCat" src={'/images/icons8/icons8-cat-footprint-16.png'} />
                                <span className="topic1">{t('evrsgd')}</span>
                            </p>
                            <h2 className="topic2" style={{ fontSize: '4rem' }}>
                                {t('evrsgd')} <br />
                                {t('update')}
                            </h2>
                        </Col>
                        <Col lg="6">
                            <div className="btn-area">
                                <a href={routes.services} className="btn-discover">
                                    {t('discoverMore')}
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="post-pet-care-body">
                    <Row>
                        <Col lg="6" style={{ marginBottom: 24 }}>
                            <div className="service-display-wrapper">
                                <div className="service-display-image">
                                    <img src={serviceData[0].icon} />
                                </div>
                                <div className="service-display-content">
                                    <span className="p-text">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span className="p-text ms-2">By {serviceData[0].author || 'Admin'}</span>
                                    </span>
                                    <h1 className="content-title">
                                        <a>{serviceData[0].name}</a>
                                    </h1>
                                    <a className="loadmore" href={`/services/${serviceData[0].slug}/detail`}>
                                        <span>Load More</span>
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" style={{ marginBottom: 24 }}>
                            <div className="service-display-wrapper">
                                <div className="service-display-image">
                                    <img src={serviceData[3].icon} />
                                </div>
                                <div className="service-display-content">
                                    <span className="p-text">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span className="p-text ms-2">By {serviceData[3].author || 'Admin'}</span>
                                    </span>
                                    <h1 className="content-title">
                                        <a>{serviceData[3].name}</a>
                                    </h1>
                                    <a className="loadmore" href={`/services/${serviceData[3].slug}/detail`}>
                                        <span>Load More</span>
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" style={{ marginBottom: 24 }}>
                            <div className="service-display-wrapper">
                                <div className="service-display-image">
                                    <img src={serviceData[1].icon} />
                                </div>
                                <div className="service-display-content">
                                    <span className="p-text">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span className="p-text ms-2">By {serviceData[1].author || 'Admin'}</span>
                                    </span>
                                    <h1 className="content-title">
                                        <a>{serviceData[1].name}</a>
                                    </h1>
                                    <a className="loadmore" href={`/services/${serviceData[1].slug}/detail`}>
                                        <span>Load More</span>
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" style={{ marginBottom: 24 }}>
                            <div className="service-display-wrapper">
                                <div className="service-display-image">
                                    <img src={serviceData[2].icon} />
                                </div>
                                <div className="service-display-content">
                                    <span className="p-text">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span className="p-text ms-2">By {serviceData[2].author || 'Admin'}</span>
                                    </span>
                                    <h1 className="content-title">
                                        <a>{serviceData[2].name}</a>
                                    </h1>
                                    <a className="loadmore" href={`/services/${serviceData[2].slug}/detail`}>
                                        <span>Load More</span>
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
}
export default Home;
