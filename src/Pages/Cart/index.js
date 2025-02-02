import './Cart.scss';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import BottomBarCart from '~/components/BottomBarCart';
import CartItem from '~/components/CartItem';
import configureRoute from '~/config/routes';
import { handleGetListProductInCartApi } from '~/service/userService';
import { deleteAllProductFromBill } from '../Payment/PaymentSlices';

import SwiperForProduct from '~/components/SwiperForProduct';
import Toastify from '~/components/Toastify';
import checkLogin from '~/utils/checkLogin';

function Cart() {
    const dispatch = useDispatch();
    let isLogin = checkLogin();
    let userId = '';
    if (isLogin) {
        const userData = JSON.parse(sessionStorage.getItem('user_data'));
        userId = userData.id;
    }
    const productData = useSelector((state) => state.storeSlices.value);
    const [listProductsInCart, setListProductsInCart] = useState([]);
    // console.log(listProductsInCart);
    const fetchData = async (userId) => {
        const res = await handleGetListProductInCartApi(userId);
        setListProductsInCart(res);
    };

    useEffect(() => {
        //fetch product in cart
        fetchData(userId);
        dispatch(deleteAllProductFromBill());
    }, []);

    return (
        <Container fluid className="cart-containter text-center">
            <Toastify />
            <Container className="my-3 container1">
                {listProductsInCart.status ? (
                    listProductsInCart.data.map((item, key) => (
                        <CartItem
                            key={key}
                            fetchData={fetchData}
                            userId={userId}
                            productid={item.productid}
                            thumpnail2={item.thumpnail2}
                            dimensions={item.dimensions}
                            quantity={item.quantity}
                            origin={item.origin}
                            color={item.color}
                            product_name={item.product_name}
                            productPrice={item.productPrice}
                            cartPrice={item.cartPrice}
                            isAllowModifyQuantity
                        />
                    ))
                ) : (
                    <div className="no-product-cart">
                        <p className="topic1 m-0">Không có sản phẩm trong giỏ hàng</p>
                        <Link className="buy-product" to={configureRoute.store}>
                            <FontAwesomeIcon icon={faCartPlus} />
                            <span className="mx-2">Tiếp tục mua hàng</span>
                        </Link>
                    </div>
                )}
                <BottomBarCart />
            </Container>
            <Container>
                <Row>
                    <div className="relative-product mt-5">
                        <h2 className="topic2">Related Products</h2>
                        <SwiperForProduct productData={productData} userId={userId} />
                    </div>
                </Row>
            </Container>
        </Container>
    );
}

export default Cart;
