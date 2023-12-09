import './Cart.scss';
import CartItem from '~/components/CartItem';
import BottomBarCart from '~/components/BottomBarCart';
import { Container, Row, Col } from 'reactstrap';
import { handleGetListProductInCartApi } from '~/service/userService';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllProductFromBill } from '../Payment/PaymentSlices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import configureRoute from '~/config/routes';

function Cart() {
    let user_data = JSON.parse(sessionStorage.user_data);
    let userId = user_data.id;
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
    }, []);

    return (
        <Container fluid className="cart-containter text-center">
            <Container className="my-3">
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
        </Container>
    );
}

export default Cart;
