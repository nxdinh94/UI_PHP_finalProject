import { A11y, Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiper.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { faFacebook, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default ({ teamData, autoplay }) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            autoplay={
                autoplay || {
                    delay: 2500,
                    disableOnInteraction: false,
                }
            }
            spaceBetween={50}
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
            {teamData.map((data, index) => (
                <SwiperSlide key={index}>
                    <div className="avt-wrapper">
                        <div className="avt">
                            <img src={data.avatar} />
                        </div>
                        <div className="name">
                            <a href={`/team/${data.id}/detail`} className="h4">
                                {data.fullname}
                            </a>
                        </div>
                        <div className="position">
                            <h6>{data.name}</h6>
                        </div>
                        <div className="social">
                            <div className="social-icon">
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    size="lg"
                                    className="icon"
                                    style={{ color: 'red' }}
                                />
                            </div>
                            <div className="social-icon">
                                <FontAwesomeIcon icon={faTiktok} size="lg" className="icon" />
                            </div>
                            <div className="social-icon">
                                <FontAwesomeIcon icon={faTwitter} size="lg" className="icon" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
