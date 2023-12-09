import './BottomBarCart.scss';
import configureRoute from '~/config/routes';
import { deleteAllProductFromBill, deleteProductFromBill } from '~/Pages/Payment/PaymentSlices';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import Toastify from '~/components/Toastify';
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
            <Toastify />
            <p>{`Tổng thanh toán: ${totalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}`}</p>
            <button
                onClick={() => {
                    if (totalPrice === 0) {
                        toast.error('Vui lòng chọn sản phẩm', { position: 'bottom-left', autoClose: 1000 });
                    } else {
                        window.location.href = configureRoute.payment;
                    }
                }}
                className="btn-buy"
            >
                <span>Mua hàng</span>
            </button>
        </div>
    );
}

export default BottomBarCart;
