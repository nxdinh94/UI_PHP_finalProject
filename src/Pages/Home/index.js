import { Container, Row, Col } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../../components/Slider';
import './Home.scss';
import { getAllPetsAction } from '../../actions';
const settings = {
    className: 'center',
    infinite: false,
    centerPadding: '60px',
    slidesToShow: 4,
    swipeToSlide: true,
};

function Home() {
    const [handleDataPet, setHandleDataPet] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const petsData = await getAllPetsAction();
                setHandleDataPet(petsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <Container fluid className="px-0">
            <div className="container">
                <Row>
                    <Col lg="12" className="section-share ">
                        <Slider settings={settings} dataPet={handleDataPet}></Slider>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" className="section-share ">
                        <Slider settings={settings} dataPet={handleDataPet}></Slider>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}
export default Home;
