import './Cart.scss';
import CartItem from '~/components/CartItem';
import BottomBarCart from '~/components/BottomBarCart';
import { Container, Row, Col } from 'reactstrap';
import { handleGetListProductInCartApi } from '~/service/userService';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllProductFromBill } from '../Payment/PaymentSlices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import configureRoute from '~/config/routes';

import SwiperForProduct from '~/components/SwiperForProduct';

function Cart() {
    let user_data = JSON.parse(sessionStorage.user_data);
    let userId = user_data.id;
    const productData = useSelector((state) => state.storeSlices.value);
    const [listProductsInCart, setListProductsInCart] = useState([]);
    // console.log(listProductsInCart);
    const fetchData = async (userid) => {
        const res = await handleGetListProductInCartApi(userid);
        setListProductsInCart(res);
    };
    const dispatch = useDispatch();

    useEffect(() => {
        //fetch product in cart
        fetchData(userId);
        dispatch(deleteAllProductFromBill());
        const handleBeforeUnload = (event) => {
            const message = 'Are you sure you want to leave?';
            event.returnValue = message; // Standard for most browsers
            
            return message; // For some older browsers
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <Container fluid className="cart-containter text-center">
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
                        <SwiperForProduct productData={productData} />
                    </div>
                </Row>
            </Container>
        </Container>
    );
}

export default Cart;
