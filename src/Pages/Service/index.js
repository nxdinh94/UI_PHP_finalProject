import './Service.scss';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '~/components/Swiper/Swiper.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip';
import { Container, Row, Col } from 'reactstrap';
function Service() {
    return (
        <div className="container-fluid" style={{ padding: '10px 0px' }}>
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
                                <h2 className="topic2">THĂM KHÁM BỆNH ĐỊNH KÌ</h2>
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
            <Container>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
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
                    <SwiperSlide>
                        <div className="card-item-content">
                            <img
                                className="img-fluid image-items mx-auto d-block card-img mb-4"
                                src="/images/blog/blog-1.jpg"
                                alt="alternation"
                            />
                            <div className="text text-center">
                                <p className="h4 fw-bolder">Dịch vụ tắm rửa và chăm sóc lông</p>
                                <p className="p-text">
                                    Dịch vụ giúp giữ cho bộ lông của thú cưng sạch sẽ và khỏe mạnh: tắm rửa, cắt tỉa
                                    lông, chải lông, và các dịch vụ tạo kiểu lông khác.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-item-content">
                            <img
                                className="img-fluid image-items mx-auto d-block card-img mb-4"
                                src="/images/blog/blog-1.jpg"
                                alt="alternation"
                            />
                            <div className="text text-center">
                                <p className="h4 fw-bolder">Dịch vụ tắm rửa và chăm sóc lông</p>
                                <p className="p-text">
                                    Dịch vụ giúp giữ cho bộ lông của thú cưng sạch sẽ và khỏe mạnh: tắm rửa, cắt tỉa
                                    lông, chải lông, và các dịch vụ tạo kiểu lông khác.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-item-content">
                            <img
                                className="img-fluid image-items mx-auto d-block card-img mb-4"
                                src="/images/blog/blog-1.jpg"
                                alt="alternation"
                            />
                            <div className="text text-center">
                                <p className="h4 fw-bolder">Dịch vụ tắm rửa và chăm sóc lông</p>
                                <p className="p-text">
                                    Dịch vụ giúp giữ cho bộ lông của thú cưng sạch sẽ và khỏe mạnh: tắm rửa, cắt tỉa
                                    lông, chải lông, và các dịch vụ tạo kiểu lông khác.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-item-content">
                            <img
                                className="img-fluid image-items mx-auto d-block card-img mb-4"
                                src="/images/blog/blog-1.jpg"
                                alt="alternation"
                            />
                            <div className="text text-center">
                                <p className="h4 fw-bolder">Dịch vụ tắm rửa và chăm sóc lông</p>
                                <p className="p-text">
                                    Dịch vụ giúp giữ cho bộ lông của thú cưng sạch sẽ và khỏe mạnh: tắm rửa, cắt tỉa
                                    lông, chải lông, và các dịch vụ tạo kiểu lông khác.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-item-content">
                            <img
                                className="img-fluid image-items mx-auto d-block card-img mb-4"
                                src="/images/blog/blog-1.jpg"
                                alt="alternation"
                            />
                            <div className="text text-center">
                                <p className="h4 fw-bolder">Dịch vụ tắm rửa và chăm sóc lông</p>
                                <p className="p-text">
                                    Dịch vụ giúp giữ cho bộ lông của thú cưng sạch sẽ và khỏe mạnh: tắm rửa, cắt tỉa
                                    lông, chải lông, và các dịch vụ tạo kiểu lông khác.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-item-content">
                            <img
                                className="img-fluid image-items mx-auto d-block card-img mb-4"
                                src="/images/blog/blog-1.jpg"
                                alt="alternation"
                            />
                            <div className="text text-center">
                                <p className="h4 fw-bolder">Dịch vụ tắm rửa và chăm sóc lông</p>
                                <p className="p-text">
                                    Dịch vụ giúp giữ cho bộ lông của thú cưng sạch sẽ và khỏe mạnh: tắm rửa, cắt tỉa
                                    lông, chải lông, và các dịch vụ tạo kiểu lông khác.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-item-content">
                            <img
                                className="img-fluid image-items mx-auto d-block card-img mb-4"
                                src="/images/blog/blog-1.jpg"
                                alt="alternation"
                            />
                            <div className="text text-center">
                                <p className="h4 fw-bolder">Dịch vụ tắm rửa và chăm sóc lông</p>
                                <p className="p-text">
                                    Dịch vụ giúp giữ cho bộ lông của thú cưng sạch sẽ và khỏe mạnh: tắm rửa, cắt tỉa
                                    lông, chải lông, và các dịch vụ tạo kiểu lông khác.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-item-content">
                            <img
                                className="img-fluid image-items mx-auto d-block card-img mb-4"
                                src="/images/blog/blog-1.jpg"
                                alt="alternation"
                            />
                            <div className="text text-center">
                                <p className="h4 fw-bolder">Dịch vụ tắm rửa và chăm sóc lông</p>
                                <p className="p-text">
                                    Dịch vụ giúp giữ cho bộ lông của thú cưng sạch sẽ và khỏe mạnh: tắm rửa, cắt tỉa
                                    lông, chải lông, và các dịch vụ tạo kiểu lông khác.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
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
