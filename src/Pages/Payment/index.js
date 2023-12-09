import './Payment.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Container, Col, Cart, Row } from 'reactstrap';
import { handleGetListProductInCartApi } from '~/service/userService';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
function Payment() {
    let user_data = '';

    let isLogin = sessionStorage.isLogin;
    if (isLogin) {
        user_data = JSON.parse(sessionStorage.user_data);
    }
    let userId = user_data.id;

    const [listProductsInCart, setListProductsInCart] = useState([]);
    let listProductsPayment = [];
    const paymentProduct = useSelector((state) => state.paymentSlices.value);
    // const productData = useSelector((state) => state.storeSlices.value);
    // // console.log(productData);
    // if (productData) {
    //     listProductsPayment = paymentProduct
    //         .map((item1) => {
    //             let matchingItems = productData.filter((item2) => item1.id == item2.productid);
    //             return matchingItems.length > 0 ? matchingItems : null;
    //         })
    //         .filter((item) => item !== null)
    //         .reduce((acc, val) => [...acc, ...val], []);
    // }
    // console.log(listProductsPayment);
    // // console.log(paymentProduct);
    // // console.log(listProductsInCart.data);
    // useEffect(() => {
    //     //fetch product in cart
    // }, []);
    console.log(paymentProduct);
    return (
        <Container fluid className="payment-container my-3">
            <Container className="deliver-address-wrapper">
                <Row>
                    <div className="wrapper-header">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Địa chỉ nhận hàng</span>
                    </div>
                    <div className="wrapper-body">
                        <div className="name-phone">
                            <p className="name">{user_data.fullname}</p>
                            <p className="phone">{user_data.phone}</p>
                        </div>
                        <div className="deliver-address">
                            <p>{user_data.delivery_address}</p>
                        </div>
                        <div className="action">
                            <a href="">Thay đổi</a>
                        </div>
                    </div>
                </Row>
            </Container>
            {/* <Container className="deliver-address-wrapper">
                <Row>
                    <div className="cart-item-container">
                        <div className="cart-item">
                            <div className="cart-item-header"></div>
                            <div className="cart-item-body">
                                <div className="product">
                                    <div className="product-image">
                                        <img src={thumpnail2} />
                                    </div>
                                    <div className="product-content">
                                        <div className="product-name">
                                            <a href={`/storeDetail/${productid}`}>
                                                <span>{product_name}</span>
                                            </a>
                                        </div>
                                        <div className="product-origin">
                                            <span>{origin}</span>
                                        </div>
                                        <div className="product-legacy">
                                            <img src="/images/product/7-ngay-mien-phi-tra-hang.png" />
                                            <span>7 Ngày Miễn Phí Trả Hàng</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-in4">
                                    <span>{`Size: ${dimensions}`}</span>
                                    <span>{`Color: ${color}`}</span>
                                </div>
                                <div className="price">
                                    <span>
                                        {' '}
                                        {itemPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                    </span>
                                </div>
                                <div className="quantity">
                                    <FontAwesomeIcon
                                        icon={faLessThan}
                                        size="sm"
                                        onClick={() => {
                                            handleDecreaseQuantity();
                                        }}
                                        className={productQuantity === 1 || isChecked ? 'disabled' : ''}
                                    />
                                    <span>{productQuantity}</span>
                                    <FontAwesomeIcon
                                        icon={faGreaterThan}
                                        size="sm"
                                        onClick={() => {
                                            handleIncreaseQuantity();
                                        }}
                                        className={isChecked ? 'disabled' : ''}
                                    />
                                </div>
                                <div className="into-money">
                                    <span>
                                        {intoMoney.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                    </span>
                                </div>
                                <div className="action">
                                    <button
                                        onClick={() => {
                                            handleDeleteCartItem();
                                        }}
                                    >
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container> */}
        </Container>
    );
}

export default Payment;
