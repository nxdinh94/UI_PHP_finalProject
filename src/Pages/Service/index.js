import './Service.scss';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useSelector } from 'react-redux';
import '~/components/Swiper/Swiper.scss';

import { Link } from 'react-router-dom';

import { isRegistered } from '~/service/appServices';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip';
import { Container, Row, Col } from 'reactstrap';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Toastify from '~/components/Toastify';
import { useTranslation } from 'react-i18next';
function Service() {
    const servicesDataRedux = useSelector((state) => state.servicesSlices.value);
    const [servicesData, setServicesData] = useState([]);

    const { t } = useTranslation();

    const isLogin = sessionStorage.getItem('isLogin');
    const handleOnRegisterBtn = (slug) => {
        if (isLogin) {
            window.location.href = `/services/${slug}/detail`;
        } else {
            toast.error(t('requestLogin'));
        }
    };
    useEffect(() => {
        setServicesData(servicesDataRedux);
    }, [servicesDataRedux]);

    return (
        <div className="container-fluid" style={{ padding: '10px 0px' }}>
            <Toastify />
            <Container fluid style={{ backgroundColor: '#F6F6F6', margin: '40px 0px' }}>
                <Container>
                    <Row className="py-5">
                        <Col md="12" lg="6">
                            <div className="checkin-img">
                                <img
                                    src="images/services/service_details-2.jpg"
                                    alt="alternative"
                                    className="img-fluid ser-img"
                                />
                            </div>
                        </Col>
                        <Col md="12" lg="6">
                            <div className="services">
                                <p className="my-1">
                                    <img className="iconCat" src={'/images/icons8/icons8-cat-footprint-16.png'} />
                                    <span className="topic1">Chúng tôi cung cấp</span>
                                </p>
                                <h2 className="topic2">Thăm khám bệnh định kì</h2>
                                <div>
                                    <p className="p-text">
                                        <span className="fw-bold">
                                            Các cuộc khám sức khỏe định kỳ để kiểm tra sức khỏe của thú cưng của bạn và
                                            phát hiện sớm các vấn đề sức khỏe trước khi chúng trở nên nghiêm trọng.
                                        </span>
                                        <br />
                                        Giúp phát hiện sớm các bệnh lý và điều trị chúng trước khi chúng trở nên nghiêm
                                        trọng.
                                        <br />
                                        Kiểm tra sức khỏe tổng thể của thú cưng của bạn và đảm bảo chúng được cung cấp
                                        đủ dinh dưỡng và các chất dinh dưỡng cần thiết. <br />
                                        Đưa ra các lời khuyên và hướng dẫn để giúp bạn chăm sóc thú cưng của mình tốt
                                        hơn.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="mb-5">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: true,
                    }}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    loop={{ draggable: true }}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log()}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        450: {
                            slidesPerView: 2,
                        },
                        800: {
                            slidesPerView: 3,
                        },
                        1000: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {servicesData.map((item, key) => (
                        <SwiperSlide key={key}>
                            <div className="card-item-content">
                                <img
                                    className="img-fluid image-items mx-auto d-block card-img mb-4"
                                    src={item.icon}
                                    alt="alternation"
                                />
                                <div className="text text-center">
                                    <p className="h4 fw-bolder">{item.name}</p>
                                    <div className="text-flow">
                                        <p className="p-text my-0">{item.dersc}</p>
                                    </div>
                                </div>
                                <div className="services-action">
                                    <button
                                        onClick={() => {
                                            handleOnRegisterBtn(item.slug);
                                        }}
                                        className="btn btn-register"
                                    >
                                        Đăng ký
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
            <Container fluid style={{ backgroundColor: 'antiquewhite', margin: '40px 0px', height: '460px' }}>
                <Container>
                    <Row className="py-5">
                        <Col md="12" lg="6" className="col-img">
                            <div className="img-contain">
                                <div className="con-image">
                                    <img src="/images/dog/dogbg1.png" alt="alternation" />
                                </div>
                            </div>
                        </Col>
                        <Col md="12" lg="6">
                            <div className="con-text text-center text-center">
                                <p className="topic2">NHỮNG CHUYẾN ĐI THÚ VỊ</p>
                                <p className="p-text">
                                    Những chuyến đi thú vị này sẽ giúp thú cưng của bạn có những trải nghiệm mới lạ và
                                    thú vị, và đồng thời cũng giúp bạn tăng cường mối quan hệ với chúng. Tuy nhiên, hãy
                                    nhớ luôn giữ an toàn và đảm bảo rằng thú cưng của bạn được tiêm phòng đầy đủ và có
                                    giấy tờ bảo hiểm sức khỏe trước khi đi chuyến đi nào.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}
export default Service;
