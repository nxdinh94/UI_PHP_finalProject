import { Navigation, Scrollbar, A11y } from 'swiper/modules';
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
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            autoplay
            loop={{draggable:true}}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
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
                            <h5>{data.name}</h5>
                        </div>
                        <div className="social">
                            <div className="social-icon">
                                <box-icon color="#7A7A7A" size="md" type="logo" name="facebook-square"></box-icon>
                            </div>
                            <div className="social-icon">
                                <box-icon color="#7A7A7A" size="md" name="instagram-alt" type="logo"></box-icon>
                            </div>
                            <div className="social-icon">
                                <box-icon color="#7A7A7A" size="md" type="logo" name="tiktok"></box-icon>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
