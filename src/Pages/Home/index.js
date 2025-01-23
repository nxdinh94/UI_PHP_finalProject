import { Col, Container, Row } from 'reactstrap';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swiper from '~/components/Swiper';
import { getAllPetsAction } from '../../actions';
import './Home.scss';

import { useTranslation } from 'react-i18next';
import SiblingComponent from '~/components/common/SiblingComponent';
import AskQuestion from '~/components/home/AskQuestion';
import CheckingTime from '~/components/home/CheckingTime';
import ServicesBody from '~/components/home/ServicesBody';
import WeAreTheBest from '~/components/home/WeAreTheBest';
import Slider from '../../components/home/Slider';
import routes from '~/config/routes';

function Home() {
    const [handleDataPet, setHandleDataPet] = useState([]);
    const { t } = useTranslation();
    const teamData = useSelector((state) => state.teamSlices.value);
    const serviceData = useSelector((state) => state.servicesSlices.value);

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
    }, [handleDataPet]);

    return (
        <Container fluid className="px-0">
            {/* We are the best */}
            <div className="container">
                <Row className="my-5">
                    <Col md="12" lg="6">
                        <img className="img-fluid" loading="lazy" src="/images/about/header-image-2.png" alt="" />
                    </Col>
                    <Col md="12" lg="6">
                        <WeAreTheBest />
                    </Col>
                </Row>
            </div>
            {/* Checking time */}
            <div className="container-fluid" style={{ backgroundColor: '#F7F7F5', padding: '10px 0px' }}>
                <div className="container">
                    <Row className="py-5">
                        <Col md="12" lg="6">
                            <img src="/images/about/about-image.png" alt="alternative" className="img-fluid" />
                        </Col>
                        <Col md="12" lg="6">
                            <CheckingTime />
                        </Col>
                    </Row>
                </div>
            </div>
            {/* Seperate line */}
            <div className="container-fluid">
                <div className="decor">
                    <div className="container">
                        <div className="row">
                            <div className="col-12"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Expert team */}
            <div className="container">
                <Row className="my-5">
                    <Col lg="12" className="section-share ">
                        <div className="text-center">
                            <SiblingComponent sibling1={'expertTeam'} sibling2={['expertTeam']} />
                        </div>
                        <Swiper teamData={teamData} />
                    </Col>
                </Row>
            </div>
            {/* Ask questions */}
            <AskQuestion />
            {/* Pet of the month session */}
            <div className="container mb-5">
                <Row>
                    <Col lg="12" className="section-share ">
                        <div className="text-center">
                            <SiblingComponent sibling1={'petInf.potm'} sibling2={['petInf.potm']} />
                        </div>
                        {/* Pet slider */}
                        <Slider dataPet={handleDataPet} />
                    </Col>
                </Row>
            </div>
            {/* Service session */}
            <div className="post-pet-care container">
                <div className="post-pet-care-header">
                    <Row>
                        <Col lg="6" className="text-start">
                            <SiblingComponent sibling1={'evrsgd'} sibling2={['evrsgd', 'update']} />
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
                {/* Service Body */}
                <ServicesBody serviceData={serviceData} />
            </div>
        </Container>
    );
}
export default Home;
