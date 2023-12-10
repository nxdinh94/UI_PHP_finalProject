import './Payment.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Container, Col, FormGroup, Label, Input, InputGroup, Row } from 'reactstrap';
import { handleGetAllFromBilldetail } from '~/service/userService';
import { handleAddToBill, addToBillDetail } from '~/service/appServices';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '~/components/CartItem';
import { toast } from 'react-toastify';
import Toastify from '~/components/Toastify';
import configureRoute from '~/config/routes';
function Payment() {
    let user_data = '';
    const [dataBillDetail, setDataBillDetail] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState('');
    const transport_fee = 0;
    let paymentPrice = 0;
    let priceToPay = 0 + transport_fee;
    let isLogin = sessionStorage.isLogin;
    if (isLogin) {
        user_data = JSON.parse(sessionStorage.user_data);
    }
    let userId = user_data.id;

    const paymentProduct = useSelector((state) => state.paymentSlices.value);

    const handleOnchangeRadio = (e) => {
        const target = e.target.value;
        setPaymentMethod(target);
    };
    const handlePaymentBtn = async (userid, paymentmethod, paymentproduct) => {
        if (!paymentmethod) {
            toast.error('Vui lòng chọn phương thức thành toán');
        } else {
            const res = await handleAddToBill(userid, paymentproduct, paymentmethod);
            // if (res.status) {
            //     toast.success(res.message);
            //     setTimeout(() => {
            //         window.location.href = configureRoute.cart;
            //     }, 1500);
            // }
        }
    };
    // console.log(paymentProduct);
    useEffect(() => {
        const handleAddToBillDetail = async () => {
            try {
                await addToBillDetail(userId, paymentProduct);
                const fetchBillDetail = await handleGetAllFromBilldetail(userId);
                setDataBillDetail(fetchBillDetail);
            } catch (error) {
                console.error('Error adding to bill detail:', error);
            }
        };

        handleAddToBillDetail();
    }, [userId, paymentProduct]);
    useEffect();
    return (
        <Container fluid className="payment-container">
            <Toastify />
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
            <Container className="payment-product-wrapper">
                <Row>
                    {dataBillDetail.status &&
                        dataBillDetail.data.map((item, key) => {
                            paymentPrice += item.cartPrice;
                            priceToPay += item.cartPrice;
                            return (
                                <CartItem
                                    key={key}
                                    thumpnail2={item.thumpnail2}
                                    dimensions={item.dimensions}
                                    quantity={item.quantity}
                                    origin={item.origin}
                                    color={item.color}
                                    product_name={item.product_name}
                                    productPrice={item.productPrice}
                                    cartPrice={item.cartPrice}
                                    isAllowModifyQuantity={false}
                                />
                            );
                        })}
                </Row>
            </Container>
            <Container className="payment-method">
                <Row>
                    <div className="method-option">
                        <FormGroup tag="fieldset" inline>
                            <legend>Phương thức thanh toán</legend>
                            <FormGroup check inline style={{ paddingLeft: 0 }}>
                                <Label check>
                                    <Input onChange={handleOnchangeRadio} value={'Momo'} type="radio" name="radio1" />
                                    Momo
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input onChange={handleOnchangeRadio} value={'COD'} type="radio" name="radio1" />
                                    COD
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input
                                        onChange={handleOnchangeRadio}
                                        value={'tknh'}
                                        type="radio"
                                        name="radio1"
                                        disabled
                                    />
                                    Thẻ Ngân Hàng
                                </Label>
                            </FormGroup>
                        </FormGroup>
                    </div>
                </Row>
            </Container>
            <Container className="payment-bill">
                <Row>
                    <div className="bill-detail">
                        <ul>
                            <li>
                                <span>Tổng tiền hàng: </span>
                                <span>
                                    {paymentPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                </span>
                            </li>
                            <li>
                                <span>Phí vận chuyển:</span>
                                <span>
                                    {transport_fee.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                </span>
                            </li>
                            <li>
                                <span>Tổng thanh toán:</span>
                                <span className="payment-total-price">
                                    {priceToPay.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                </span>
                            </li>
                        </ul>
                        <button
                            onClick={() => {
                                handlePaymentBtn(userId, paymentMethod, paymentProduct);
                            }}
                            className="btn-buy"
                        >
                            <span>Thanh toán</span>
                        </button>
                    </div>
                </Row>
            </Container>
        </Container>
    );
}

export default Payment;