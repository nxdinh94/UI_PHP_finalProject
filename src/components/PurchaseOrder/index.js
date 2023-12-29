import { Container, Col, Row } from 'reactstrap';
import './PurchaseOrder.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { handleGetAllPendingBill, handlGetAllApproveBill } from '~/service/userService';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllProductFromBill } from '~/Pages/Payment/PaymentSlices';
import CartItem from '~/components/CartItem';
import configureRoute from '~/config/routes';
function OrderStatus() {
    let user_data = JSON.parse(sessionStorage.user_data);
    let userId = user_data.id;
    const productData = useSelector((state) => state.storeSlices.value);
    const [listPurchase, setListPurchase] = useState([]);
    // console.log(listProductsInCart);
    const fetchData = async (userid) => {
        const res = await handleGetAllPendingBill(userid);
        setListPurchase(res);
    };
    const dispatch = useDispatch();

    useEffect(() => {
        //fetch product in cart
        fetchData(userId);
        dispatch(deleteAllProductFromBill());
    }, []);
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
        // Perform any other actions you want when a button is clicked
    };
    return (
        <Container fluid style={{ background: '#f5f5f5' }}>
            <Container className="py-4">
                <Row>
                    <Col className="px-0">
                        <div className="nav-horizontal">
                            <ul>
                                <li>
                                    <button
                                        onClick={() => {
                                            handleButtonClick(1);
                                            fetchData(userId);
                                            dispatch(deleteAllProductFromBill());
                                        }}
                                        className={activeButton === 1 ? 'active' : ''}
                                    >
                                        Chờ xác nhận
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={async () => {
                                            handleButtonClick(2);
                                            const res = await handlGetAllApproveBill(userId);
                                            setListPurchase(res);
                                            dispatch(deleteAllProductFromBill());
                                        }}
                                        className={activeButton === 2 ? 'active' : ''}
                                    >
                                        Chờ giao hàng
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            handleButtonClick(3);
                                            setListPurchase({ status: false });
                                        }}
                                        className={activeButton === 3 ? 'active' : ''}
                                    >
                                        Đang vận chuyển
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            handleButtonClick(4);
                                            setListPurchase({ status: false });
                                        }}
                                        className={activeButton === 4 ? 'active' : ''}
                                    >
                                        Hoàn thành
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="p-0">
                        <div className="cart-containter" style={{ backgroundColor: 'white' }}>
                            {listPurchase.status ? (
                                Object.keys(listPurchase.data).map((keyObject) => {
                                    let purchase = listPurchase.data[keyObject];
                                    let paymentMethod = purchase.payment_method;
                                    return purchase.products.map((item, index) => {
                                        let quantity = item.quantity;
                                        return (
                                            <CartItem
                                                key={index}
                                                fetchData={fetchData}
                                                userId={userId}
                                                productid={item.productid}
                                                thumpnail2={item.thumpnail2}
                                                dimensions={item.dimensions}
                                                quantity={quantity}
                                                origin={item.origin}
                                                color={item.color}
                                                product_name={item.product_name}
                                                productPrice={item.price / quantity}
                                                cartPrice={item.price}
                                                payment_method={paymentMethod}
                                            />
                                        );
                                    });
                                })
                            ) : (
                                <div className="no-product-cart">
                                    <p className="topic1 m-0">Chưa có đơn hàng</p>
                                    <Link className="buy-product" to={configureRoute.store}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                        <span className="mx-2">Tiếp tục mua hàng</span>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default OrderStatus;
