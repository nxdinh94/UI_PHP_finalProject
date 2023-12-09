import './BottomBarCart.scss';
import configureRoute from '~/config/routes';
import { deleteAllProductFromBill, deleteProductFromBill } from '~/Pages/Payment/PaymentSlices';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function BottomBarCart() {
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);
    const paymentProduct = useSelector((state) => state.paymentSlices.value);
    // console.log(paymentProduct);
    let calTotalPrice = 0;
    useEffect(() => {
        paymentProduct.forEach((item) => (calTotalPrice += item.intoMoney));
        setTotalPrice(calTotalPrice);
    }, [paymentProduct]);
    return (
        <div className="bottom-bar-wrapper">
            <p>{`Tổng thanh toán: ${totalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}`}</p>
            <a href={configureRoute.payment} onClick={() => dispatch(deleteAllProductFromBill())} className="btn-buy">
                <span>Mua hàng</span>
            </a>
        </div>
    );
}

export default BottomBarCart;
