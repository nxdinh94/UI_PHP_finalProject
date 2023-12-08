import './Cart.scss';
import CartItem from '~/components/CartItem';
import { Container, Row, Col } from 'reactstrap';
import { handleGetListProductInCartApi } from '~/service/userService';
import { useEffect, useState } from 'react';
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
        if (res.status) {
            setListProductsInCart(res);
        }
    };
    useEffect(() => {
        fetchData(userId);
    }, []);

    return (
        <Container fluid className="cart-containter text-center">
            {listProductsInCart.status ? (
                listProductsInCart.data.map((item, key) => {
                    return (
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
                    );
                })
            ) : (
                <Container className="my-3">
                    <div className="no-product-cart">
                        <p className="topic1">Không có sản phẩm trong giỏ hàng</p>
                        <Link className="buy-product" to={configureRoute.store}>
                            <FontAwesomeIcon icon={faCartPlus} />
                            <span className="mx-2">Tiếp tục mua hàng</span>
                        </Link>
                    </div>
                </Container>
            )}
        </Container>
    );
}

export default Cart;
