import { A11y, Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SwiperForProduct.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default ({ productData, autoplay }) => {
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
            {productData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="product-wrapper">
                        <div className="product">
                            <img src={item.thumpnail2} />
                        </div>
                        <div className="rank">
                            {[...Array(item.evaluate_star)].map((key) => (
                                <FontAwesomeIcon icon={faStar} className="star" size="sm" key={key} />
                            ))}
                        </div>
                        <div className="topic2 name fw-bolder" style={{ fontSize: 17, marginTop: 10, marginBottom: 5 }}>
                            <a href={`/storeDetail/${item.productid}`}>
                                <h4>{item.product_name}</h4>
                            </a>
                        </div>
                        <div className="price">
                            <h6>{item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h6>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
