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
                                src={'/images/icons8-cat-footprint-16.png'}
                                alt="alternation"
                                loading="lazy"
                                className="iconCat"
                            />
                            <span className="topic1">Những gì chúng tôi cung cấp</span>
                        </div>
                        <h2 className="topic2">Chúng tôi là tốt nhất</h2>
                        <p className="p-text">
                            Chúng tôi cung cấp các sản phẩm và dịch vụ chăm sóc thú cưng, bao gồm thức ăn, đồ dùng, sản
                            phẩm chăm sóc, bệnh viện thú y, và spa chăm sóc thú cưng. Bên cạnh đó, chúng tôi còn cung
                            cấp các tư vấn và hướng dẫn chăm sóc thú cưng để giúp người dùng có thể chăm sóc thú cưng
                            của mình một cách tốt nhất. Với các chương trình khuyến mãi và giảm giá hấp dẫn, chúng tôi
                            mong muốn mang đến cho khách hàng những trải nghiệm mua sắm tốt nhất.
                        </p>
                        <ul className="w-list">
                            <li>
                                <p className="p-text-item">Thông tin về các loại thú cưng</p>
                            </li>
                            <li>
                                <p className="p-text-item">Tư vấn hành vi</p>
                            </li>
                            <li>
                                <p className="p-text-item">Chuẩn đoán bệnh tật</p>
                            </li>
                            <li>
                                <p className="p-text-item">Chi phí ưu đãi</p>
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
                                    <img className="iconCat" src={'/images/icons8-cat-footprint-16.png'} />
                                    <span className="topic1">Check in time</span>
                                </p>
                                <h2 className="topic2">Chúng tôi mang lại niềm vui cho bạn</h2>
                                <div>
                                    <p className="p-text">
                                        Chúng tôi luôn sẵn sàng phục vụ khách hàng trong khung giờ làm việc linh hoạt và
                                        tiện lợi, để đảm bảo sự hài lòng và tin tưởng của khách hàng.
                                    </p>
                                </div>

                                <ul className="checkin-list">
                                    <li className="checkin-item">
                                        <p className="h5 p-text-item">Từ 9:00 đến 21:00</p>
                                        <p className="checkin-script p-text">
                                            Khung giờ làm việc tiệc vời, thuận tiện cho mọi thứ.
                                        </p>
                                    </li>
                                    <li className="checkin-item">
                                        <p className="h5 p-text-item">Dịch vụ khẩn cấp</p>
                                        <p className="checkin-script p-text">
                                            Hãy hoàn toàn yên tâm, chúng tôi luôn sẵn sàng vì bạn
                                        </p>
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
                                <img className="iconCat" src={'/images/icons8-cat-footprint-16.png'} />
                                <span className="topic1">Nhân viên chuyên nghiệp</span>
                            </p>
                            <h2 className="topic2">Nhân viên chuyên nghiệp</h2>
                        </div>
                        <Swiper teamData={handleDataTeam} />
                    </Col>
                </Row>
            </div>
            <div className="container">
                <Row>
                    <Col lg="12" className="section-share ">
                        <div className="slider-title">
                            <p>
                                <img className="iconCat" src={'/images/icons8-cat-footprint-16.png'} />
                                <span className="topic1">Pets of the month</span>
                            </p>
                            <h2 className="topic2">Pets of the month</h2>
                        </div>
                        <Slider settings={settings} dataPet={handleDataPet}></Slider>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}
export default Home;
