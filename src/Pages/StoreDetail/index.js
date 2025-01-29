import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Col, Container, Input, Row } from 'reactstrap';
import './StoreDetail.scss';

import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SwiperForProduct from '~/components/SwiperForProduct';

import AdditionIn4Product from '~/components/StoreDetail/AdditionIn4Product';
import AddToCartButton from '~/components/StoreDetail/AddToCartButton';
import ModifyQuantityButton from '~/components/StoreDetail/ModifyQuantityButton';
import Toastify from '~/components/Toastify';
import checkLogin from '~/utils/checkLogin';
function StoreDetail() {
    const { slug } = useParams();
    const [productQuantity, setProductQuantity] = useState(1);
    const [tab, setTab] = useState('additional-infor');
    const [tabClassName1, setTabClassName1] = useState('active');
    const [tabClassName2, setTabClassName2] = useState('');
    const productData = useSelector((state) => state.storeSlices.value);
    const specificProduct = productData.filter((item) => {
        return item.productid === +slug;
    });
    const { t } = useTranslation();
    let isLogin = checkLogin();
    let userId = '';
    // console.log(isLogin);
    if (isLogin) {
        const user_data = JSON.parse(sessionStorage.user_data);
        userId = user_data.id;
    }

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
                                    {[...Array(specificProduct[0].evaluate_star)].map((item, key) => (
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
                                <ModifyQuantityButton quantity={productQuantity} setQuantity={setProductQuantity} />
                                <AddToCartButton
                                    userId={userId}
                                    productid={specificProduct[0].productid}
                                    quantity={productQuantity}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col md="2" className="p-0">
                        <div className="search-container">
                            <p className="search-title">{t('searchProduct')}</p>
                            <Input className="my-0" />
                        </div>
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
                        <SwiperForProduct productData={productData} userId={userId} />
                    </div>
                </Row>
            </Container>
        </Container>
    );
}

export default StoreDetail;
