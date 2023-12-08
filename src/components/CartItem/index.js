import './CartItem.scss';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { handleChangeQuantityProductInCartApi, handleDeleteProductInCartApi } from '~/service/userService';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleFetchQuantityProductInCartThunk } from '~/Pages/Cart/CartSlices';
function CartItem({ ...props }) {
    const { userId } = props;
    const { productid } = props;
    const { thumpnail2 } = props;
    const { quantity } = props;
    const { productPrice } = props;
    const { cartPrice } = props;
    const { origin } = props;
    const { color } = props;
    const { dimensions } = props;
    const { product_name } = props;
    const { fetchData } = props;

    const [productQuantity, setProductQuantity] = useState(quantity);
    const [itemPrice, setItemPrice] = useState(productPrice);
    const [intoMoney, setIntoMoney] = useState(itemPrice * productQuantity);

    const dispatch = useDispatch();

    const handleDeleteCartItem = async () => {
        await handleDeleteProductInCartApi(userId, productid);
        fetchData(userId);
        dispatch(handleFetchQuantityProductInCartThunk(userId));
    };

    const handleDecreaseQuantity = async () => {
        setProductQuantity((prev) => prev - 1);
        setIntoMoney((prev) => prev - itemPrice);
        await handleChangeQuantityProductInCartApi(userId, productid, productQuantity - 1);
    };
    const handleIncreaseQuantity = async () => {
        setProductQuantity((prev) => prev + 1);
        setIntoMoney((prev) => prev + itemPrice);
        await handleChangeQuantityProductInCartApi(userId, productid, productQuantity + 1);
    };
    return (
        <Container className="cart-item-container">
            <div className="cart-item">
                <div className="cart-item-header"></div>
                <div className="cart-item-body">
                    <div className="check-box">
                        <input type="checkbox" id="check-item" name="check-item" value="Bike" />
                    </div>
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
                        <span> {itemPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                    <div className="quantity">
                        <FontAwesomeIcon
                            icon={faLessThan}
                            size="sm"
                            onClick={() => {
                                handleDecreaseQuantity();
                            }}
                            className={productQuantity === 1 ? 'disabled' : ''}
                        />
                        <span>{productQuantity}</span>
                        <FontAwesomeIcon
                            icon={faGreaterThan}
                            size="sm"
                            onClick={() => {
                                handleIncreaseQuantity();
                            }}
                        />
                    </div>
                    <div className="into-money">
                        <span>{intoMoney.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
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
        </Container>
    );
}

export default CartItem;
