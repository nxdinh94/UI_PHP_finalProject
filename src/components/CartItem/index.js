import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchQuantityProductInCartThunk } from '~/Pages/Cart/CartSlices';
import { addProductToBill, deleteProductFromBill } from '~/Pages/Payment/PaymentSlices';
import { handleChangeQuantityProductInCartApi, handleDeleteProductInCartApi } from '~/service/userService';
import './CartItem.scss';
function CartItem({ ...props }) {
    const { userId } = props;
    const { productid } = props;
    const { thumpnail2 } = props;
    const { quantity } = props;
    const { productPrice } = props;
    const { cartPrice } = props;
    const { payment_method } = props;
    const { origin } = props;
    const { color } = props;
    const { dimensions } = props;
    const { product_name } = props;
    const { fetchData } = props;
    const { isAllowModifyQuantity } = props;

    const [productQuantity, setProductQuantity] = useState(quantity);
    const [itemPrice, setItemPrice] = useState(productPrice);
    const [intoMoney, setIntoMoney] = useState(itemPrice * productQuantity);
    const [isChecked, setIsChecked] = useState(false);

    const dispatch = useDispatch();

    const handleDeleteCartItem = async () => {
        await handleDeleteProductInCartApi(userId, productid);
        dispatch(handleFetchQuantityProductInCartThunk(userId));
        fetchData(userId);
    };

    const handleDecreaseQuantity = async () => {
        setProductQuantity((prev) => prev - 1);
        setIntoMoney((prev) => prev - itemPrice);
        await handleChangeQuantityProductInCartApi(userId, productid, productQuantity - 1);
        fetchData(userId);
    };
    const handleIncreaseQuantity = async () => {
        setProductQuantity((prev) => prev + 1);
        setIntoMoney((prev) => prev + itemPrice);
        await handleChangeQuantityProductInCartApi(userId, productid, productQuantity + 1);
        fetchData(userId);
    };

    const paymentProduct = useSelector((state) => state.paymentSlices.value);
    // console.log('payumentProduct', paymentProduct);
    const handleOnChangeCheckbox = (e) => {
        setIsChecked(!isChecked);
        const targetId = e.target.value;
        let checkIndex = -1;
        const isExist = paymentProduct.some((item) => item.id == targetId);
        // console.log('isExist', isExist);
        if (isExist) {
            checkIndex = paymentProduct.findIndex((item) => item.id == targetId);
            dispatch(deleteProductFromBill({ index: checkIndex }));
        } else {
            dispatch(addProductToBill({ id: targetId, quantity: productQuantity, intoMoney: intoMoney }));
        }
    };

    return (
        <div className="cart-item-container">
            <div className="cart-item">
                <div className="cart-item-header"></div>
                <div className="cart-item-body">
                    {isAllowModifyQuantity && (
                        <div className="check-box">
                            <input
                                type="checkbox"
                                id="check-item"
                                onChange={handleOnChangeCheckbox}
                                name="check-item"
                                value={productid}
                            />
                        </div>
                    )}
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
                        {isAllowModifyQuantity && (
                            <FontAwesomeIcon
                                icon={faLessThan}
                                size="sm"
                                onClick={() => {
                                    handleDecreaseQuantity();
                                }}
                                className={productQuantity === 1 || isChecked ? 'disabled' : ''}
                            />
                        )}
                        <span>{productQuantity}</span>
                        {isAllowModifyQuantity && (
                            <FontAwesomeIcon
                                icon={faGreaterThan}
                                size="sm"
                                onClick={() => {
                                    handleIncreaseQuantity();
                                }}
                                className={isChecked ? 'disabled' : ''}
                            />
                        )}
                    </div>
                    <div className="into-money">
                        <span>{intoMoney.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                    {payment_method && (
                        <div className="payment_method">
                            <span>{payment_method}</span>
                        </div>
                    )}
                    {isAllowModifyQuantity && (
                        <div className="action">
                            <button
                                onClick={() => {
                                    handleDeleteCartItem();
                                }}
                            >
                                Xóa
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CartItem;
