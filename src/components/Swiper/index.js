import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiper.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip';

import 'boxicons';

export default ({ teamData }) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            loop={{ draggable: true }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
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
                            <h4>{data.fullname}</h4>
                        </div>
                        <div className="position">
                            <h6>{data.name}</h6>
                        </div>
                        <div className="social">
                            <div className="social-icon">
                                <box-icon
                                    color="#7A7A7A"
                                    border="circle"
                                    size="md"
                                    type="logo"
                                    name="facebook-square"
                                ></box-icon>
                            </div>
                            <div className="social-icon">
                                <box-icon
                                    color="#7A7A7A"
                                    border="circle"
                                    size="md"
                                    name="instagram-alt"
                                    type="logo"
                                ></box-icon>
                            </div>
                            <div className="social-icon">
                                <box-icon
                                    color="#7A7A7A"
                                    border="circle"
                                    size="md"
                                    type="logo"
                                    name="tiktok"
                                ></box-icon>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
