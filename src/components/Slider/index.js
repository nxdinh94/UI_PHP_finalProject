import React, { Component } from 'react';
import Slider from 'react-slick';
import './SliderCarousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '~/components/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from '~/components/Modal';

function SliderCarousel({ settings, dataPet }) {
    return (
        <div className='slider-wrapper'>
            

            <Slider {...settings}>
                {dataPet.map((data, index) => {
                    return (
                        <div className="section-customize" key={index}>
                            <div className="image">
                                <Image borderRadius={'10px'} width={'100%'} height={'185px'} src={data.thumbnail} hover={'1.05'} />
                            </div>
                            <Modals petDetail={data}></Modals>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default SliderCarousel;
