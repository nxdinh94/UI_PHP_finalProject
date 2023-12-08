import { Col, Row, Container } from 'reactstrap';
import './StoreDetail.scss';

import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faGreaterThan, faLessThan, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react';
import SwiperForProduct from '~/components/SwiperForProduct';
import { useParams, Link } from 'react-router-dom';

import AdditionIn4Product from '~/components/AdditionIn4Product';
import { handleAddProductToCartApi } from '~/service/userService';
import { toast } from 'react-toastify';
import Toastify from '~/components/Toastify';
import { useDispatch } from 'react-redux';
import { handleFetchQuantityProductInCartThunk } from '~/Pages/Cart/CartSlices';
function StoreDetail() {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const [productQuantity, setProductQuantity] = useState(1);
    const [tab, setTab] = useState('additional-infor');
    const [tabClassName1, setTabClassName1] = useState('active');
    const [tabClassName2, setTabClassName2] = useState('');
    const productData = useSelector((state) => state.storeSlices.value);
    const specificProduct = productData.filter((item) => {
        return item.productid === +slug;
    });
    let user_data = JSON.parse(sessionStorage.user_data);
    let userId = user_data.id;

    const handleAddProductToCart = async (userid, productid, productquantity) => {
        const res = await handleAddProductToCartApi(userid, productid, productquantity);
        dispatch(handleFetchQuantityProductInCartThunk(userId));
        if (res.status) {
            toast.success(res.message);
        } else toast.error(res.message);
    };
    return (
        <Container fluid>
            <Toastify />
            <Container className="storeDetail-wrapper">
                <Row>
                    <Col md="4">
                        <div className="product-thumpnail">
                            <img src={specificProduct[0].thumpnail2} />
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="product-description">
                            <h2 className="topic2">{specificProduct[0].product_name}</h2>
                            <div className="rank-review">
                                <div className="rank">
                                    {[...Array(specificProduct[0].evaluate_star)].map((key) => (
                                        <FontAwesomeIcon icon={faStar} className="star" size="sm" key={key} />
                                    ))}
                                </div>
                                <div className="review">
                                    <p className="p-text">{specificProduct[0].evaluate_quantity} Customar Reviews</p>
                                </div>
                            </div>
                            <div className="price">
                                <h6>
                                    {specificProduct[0].price.toLocaleString('it-IT', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                                </h6>
                            </div>
                            <p className="product-about p-text">{specificProduct[0].description}</p>
                            <div className="product-action">
                                <div className="modify-quantity">
                                    <FontAwesomeIcon
                                        className={productQuantity <= 0 ? 'disabled' : ''}
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
                                <button
                                    className="add-cart"
                                    onClick={() => {
                                        handleAddProductToCart(userId, specificProduct[0].productid, productQuantity);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faCartShopping} size="lg" />
                                    <p>Add to cart</p>
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col md="2">
                        <p>search</p>
                    </Col>
                </Row>
                <Row>
                    <ul className="nav nav-tabs my-nav-tab">
                        <li className={`my-nav-item`}>
                            <Link
                                to="?tab=additional-infor"
                                onClick={() => {
                                    setTab('additional-infor');
                                    setTabClassName1('active');
                                    setTabClassName2('');
                                }}
                                className={`tab-link ${tabClassName1}`}
                            >
                                Additional information
                            </Link>
                        </li>
                        <li className="my-nav-item">
                            <Link
                                to="?tab=review"
                                className={`tab-link ${tabClassName2}`}
                                onClick={() => {
                                    setTab('review');
                                    setTabClassName1('');
                                    setTabClassName2('active');
                                }}
                            >
                                Review
                            </Link>
                        </li>
                    </ul>
                    <div className="tab-content">
                        {tab === 'additional-infor' ? (
                            <AdditionIn4Product
                                dimension={specificProduct[0].dimensions}
                                color={specificProduct[0].color}
                                origin={specificProduct[0].origin}
                                ingredient={specificProduct[0].ingredient}
                            />
                        ) : (
                            <div className="review"></div>
                        )}
                    </div>
                </Row>
                <Row>
                    <div className="relative-product">
                        <h2 className="topic2">Related Products</h2>
                        <SwiperForProduct productData={productData} />
                    </div>
                </Row>
            </Container>
        </Container>
    );
}

export default StoreDetail;
