import './CartItem.scss';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faGreaterThan, faLessThan, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function CartItem() {
    const [productQuantity, setProductQuantity] = useState(1);
    const [itemPrice, setItemPrice] = useState(200000);
    const [intoMoney, setIntoMoney] = useState(itemPrice * productQuantity);
    const handleDeleteCartItem = () => {};
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
                            <img src="/images/product/royal-canin.webp" />
                        </div>
                        <div className="product-content">
                            <div className="product-name">
                                <span>Royal Canin</span>
                            </div>
                            <div className="product-origin">
                                <span>Franch</span>
                            </div>
                            <div className="product-legacy">
                                <img src="/images/product/7-ngay-mien-phi-tra-hang.png" />
                                <span>7 Ngày Miễn Phí Trả Hàng</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-in4">
                        <span>{`Size: 30x30`}</span>
                        <span>{`Color: Red`}</span>
                    </div>
                    <div className="price">
                        <span> {itemPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                    <div className="quantity">
                        <FontAwesomeIcon
                            icon={faLessThan}
                            size="sm"
                            onClick={() => {
                                setProductQuantity((prev) => prev - 1);
                                setIntoMoney((prev) => prev - itemPrice);
                            }}
                            className={productQuantity <= 0 ? 'disabled' : ''}
                        />
                        <span>{productQuantity}</span>
                        <FontAwesomeIcon
                            icon={faGreaterThan}
                            size="sm"
                            onClick={() => {
                                setProductQuantity((prev) => prev + 1);
                                setIntoMoney((prev) => prev + itemPrice);
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
