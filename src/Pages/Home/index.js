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
        petDetail: {
            name: 'Baby Cat',
            thumnail: '/images/slider/baby-cat.jpg',
            description:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            furColor: 'Green',
            apprearance: 'Big',
            weight: '55kg',
            longevity: '12 year',
            original: 'American',
        },
    },
    {
        img: '/images/slider/chó lạp xưởng.png', // Use relative paths if needed
        stt: '2',
        petDetail: {
            name: 'Baby Cat',
            thumnail: '/images/slider/chó lạp xưởng.png',
            description:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            furColor: 'Green',
            apprearance: 'Big',
            weight: '55kg',
            longevity: '12 year',
            original: 'American',
        },
    },
    {
        img: '/images/slider/golden.jpg',
        stt: '3',
        petDetail: {
            name: 'Baby Cat',
            thumnail: '/images/slider/golden.jpg',
            description:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            furColor: 'Green',
            apprearance: 'Big',
            weight: '55kg',
            longevity: '12 year',
            original: 'American',
        },
    },
    {
        img: '/images/slider/meo-ba-tu.jpg',
        stt: '4',
        petDetail: {
            name: 'Baby Cat',
            thumnail: '/images/slider/meo-ba-tu.jpg',
            description:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            furColor: 'Green',
            apprearance: 'Big',
            weight: '55kg',
            longevity: '12 year',
            original: 'American',
        },
    },
    {
        img: '/images/slider/meo-trang.jpg',
        stt: '5',
        petDetail: {
            name: 'Baby Cat',
            thumnail: '/images/slider/meo-trang.jpg',
            description:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            furColor: 'Green',
            apprearance: 'Big',
            weight: '55kg',
            longevity: '12 year',
            original: 'American',
        },
    },
    {
        img: '/images/slider/Poodle.jpg',
        stt: '6',
        petDetail: {
            name: 'Baby Cat',
            thumnail: '/images/slider/Poodle.jpg',
            description:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            furColor: 'Green',
            apprearance: 'Big',
            weight: '55kg',
            longevity: '12 year',
            original: 'American',
        },
    },
];
function Home() {
    return (
        <div>
            <Container fluid>
                <div className="container">
                    <Row>
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
                        <Col md="3" lg="4">
                            <h1>Home</h1>
                        </Col>
                        <Col md="3" lg="4">
                            <h1>Home</h1>
                        </Col>
                        <Col md="3" lg="4">
                            <h1>Home</h1>
                        </Col>
                        <Col md="3" lg="4">
                            <h1>Home</h1>
                        </Col>
                        <Col md="3" lg="12" className="section-share ">
                            <Slider settings={settings} dataPet={dataPet}></Slider>
                        </Col>
                    </Row>
                    <Row></Row>
                </div>
            </Container>
        </div>
    );
}
export default Home;
