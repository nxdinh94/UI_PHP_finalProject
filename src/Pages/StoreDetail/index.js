import { Col, Row, Container } from 'reactstrap';
import './StoreDetail.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faGreaterThan, faLessThan, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react';
import Swiper from '~/components/Swiper';

function StoreDetail() {
    const [productQuantity, setProductQuantity] = useState(1);
    return (
        <Container fluid>
            <Container className="storeDetail-wrapper">
                <Row>
                    <Col md="4">
                        <div className="product-thumpnail">
                            <img src="/images/product/product-1.jpg" />
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="product-description">
                            <h2 className="topic2">Breakfast cereal</h2>
                            <div className="rank-review">
                                <div className="rank">
                                    <FontAwesomeIcon icon={faStar} className="star" size="sm" />
                                    <FontAwesomeIcon icon={faStar} className="star" size="sm" />
                                    <FontAwesomeIcon icon={faStar} className="star" size="sm" />
                                    <FontAwesomeIcon icon={faStar} className="star" size="sm" />
                                </div>
                                <div className="review">
                                    <p className="p-text">3 Customar Reviews</p>
                                </div>
                            </div>
                            <div className="price">
                                <h6>$112.00</h6>
                            </div>
                            <p className="product-about p-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                            <div className="product-action">
                                <div className="modify-quantity">
                                    <FontAwesomeIcon
                                        icon={faLessThan}
                                        size="sm"
                                        onClick={() => {
                                            setProductQuantity((prev) => prev - 1);
                                        }}
                                    />
                                    <span>{productQuantity}</span>
                                    <FontAwesomeIcon
                                        icon={faGreaterThan}
                                        size="sm"
                                        onClick={() => {
                                            setProductQuantity((prev) => prev + 1);
                                        }}
                                    />
                                </div>
                                <div className="add-cart">
                                    <FontAwesomeIcon icon={faCartShopping} size="lg" />
                                    <p>Add to cart</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="2">
                        <p>search</p>
                    </Col>
                </Row>
                <Row></Row>
                <Row>
                    <div className="relative-product"></div>
                </Row>
            </Container>
        </Container>
    );
}

export default StoreDetail;
