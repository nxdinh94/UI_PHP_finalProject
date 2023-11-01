import { Container, Row, Col } from 'reactstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../../components/Slider';
import './Home.scss';
var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
const dataPet = [
    {
        img: '/images/slider/baby-cat.jpg', // Use the 'require' method to import images
        stt: '1',
        petDetail:{
            
        }
    },
    {
        img: '/images/slider/chó lạp xưởng.png', // Use relative paths if needed
        stt: '2',
    },
    {
        img: '/images/slider/golden.jpg',
        stt: '3',
    },
    {
        img: '/images/slider/meo-ba-tu.jpg',
        stt: '4',
    },
    {
        img: '/images/slider/meo-trang.jpg',
        stt: '5',
    },
    {
        img: '/images/slider/Poodle.jpg',
        stt: '6',
    },
];
function Home() {
    return (
        <div>
            <Container fluid>
                <div className="container">
                    <Row>
                        <Col md="3" lg="12" className="section-share ">
                            <Slider settings={settings} dataPet={dataPet}></Slider>
                        </Col>
                        <Col md="3" lg="4"></Col>
                        <Col md="3" lg="4">
                            <h1>Home</h1>
                        </Col>
                        <Col md="3" lg="4">
                            <h1>Home</h1>
                        </Col>
                        <Col md="3" lg="4">
                            <h1>Home</h1>
                        </Col>
                    </Row>
                    <Row></Row>
                </div>
            </Container>
        </div>
    );
}
export default Home;
