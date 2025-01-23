import React, { Component } from 'react';
import Slider from 'react-slick';
import './SliderCarousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '~/components/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyModal from '~/components/Modal';
let settings = {
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

function SliderCarousel({dataPet }) {
    return (
        <div className="slider-wrapper">
            <Slider {...settings}>
                {dataPet.map((data, index) => {
                    return (
                        <div className="section-customize" key={index}>
                            <div className="image">
                                <Image
                                    borderRadius={'10px'}
                                    width={'100%'}
                                    height={'185px'}
                                    src={data.thumbnail}
                                    hover={'1.05'}
                                />
                            </div>
                            <MyModal petDetail={data}></MyModal>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default SliderCarousel;
