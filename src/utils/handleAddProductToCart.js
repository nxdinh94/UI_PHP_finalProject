import { toast } from 'react-toastify';
import { handleFetchQuantityProductInCartThunk } from '~/Pages/Cart/CartSlices';
import { handleAddProductToCartApi } from '~/service/userService';
export default async function handleAddProductToCart(userId, productid, productquantity, dispatch) {
    console.log('userId', userId);
    console.log('pro', productid);
    console.log('quanti', productquantity);

    const res = await handleAddProductToCartApi(userId, productid, productquantity);
    if (res.status) {
        toast.success('Đã thêm vào giỏ hàng', { position: 'bottom-right' });
        dispatch(handleFetchQuantityProductInCartThunk(userId));
    } else toast.error('Vui lòng đăng nhập để thực hiện chức năng');
}
