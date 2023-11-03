import React, { Component } from 'react';
import Slider from 'react-slick';
import './SliderCarousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '~/components/Image';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from '~/components/Modal';

function SliderCarousel({ settings, dataPet }) {
    return (
        <div className='slider-wrapper'>
            <div className="slider-title">
                <p>
                    <img src={'/images/icons8-cat-footprint-16.png'} />
                    Pets of the month
                </p>
                <h2>Pets of the month</h2>
            </div>

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
