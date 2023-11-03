import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import React, { useEffect, useState } from 'react';
import Slider from '../../components/Slider';
import './Home.scss';
import { getAllPetsAction, getAllInTeamAction } from '../../actions';
import Swiper from '~/components/Swiper';

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
        const fetchAllInExpertTeam = async () => {
            try {
                let teamData = await getAllInTeamAction();
                setHandleDataTeam(teamData);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchAllInExpertTeam();
    }, []);
    return (
        <Container fluid className="px-0">
            <div className="container">
                <Row className='my-5'>
                    <Col lg="12" className="section-share ">
                        <div className="slider-title">
                            <p>
                                <img src={'/images/icons8-cat-footprint-16.png'} />
                                Nhân viên chuyên nghiệp
                            </p>
                            <h2>Nhân viên chuyên nghiệp</h2>
                        </div>
                        <Swiper teamData={handleDataTeam} />
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" className="section-share ">
                        <div className="slider-title">
                            <p>
                                <img src={'/images/icons8-cat-footprint-16.png'} />
                                Pets of the month
                            </p>
                            <h2>Pets of the month</h2>
                        </div>
                        <Slider settings={settings} dataPet={handleDataPet}></Slider>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}
export default Home;
