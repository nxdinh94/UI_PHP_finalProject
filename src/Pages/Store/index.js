import './Store.scss';

import { Container, Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { handleAddProductToCartApi } from '~/service/userService';
import { handleFetchQuantityProductInCartThunk } from '../Cart/CartSlices';
import { toast } from 'react-toastify';
import Toastify from '~/components/Toastify';
import { useTranslation } from 'react-i18next';
import getUserData from '~/utils/getUserData';
import checkLogin from '~/utils/checkLogin';
function Store() {
    const productData = useSelector((state) => state.storeSlices.value);
    let userId = 0;
    const isLogin = checkLogin();
    if (isLogin) {
        userId = getUserData().id;
    }
    return (
        <Container className="my-5">
            <Toastify />
            <Row>
                {productData.map((item, key) => (
                    <Col lg="3" md="4" sm="6" className="store-col" key={key}>
                        <ProductItem item={item} userId={userId} productquantity={1} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

function ProductItem({ item, userId, productquantity }) {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const handleAddProductToCart = async (userid, productid, productquantity) => {
        const res = await handleAddProductToCartApi(userid, productid, productquantity);
        if (res.status) {
            toast.success('Đã thêm vào giỏ hàng', { position: 'bottom-right' });
            dispatch(handleFetchQuantityProductInCartThunk(userId));
        } else toast.error('Vui lòng đăng nhập để thực hiện chức năng');
    };
    return (
        <div className="product-wrapper">
            <div className="product">
                <img src={item.thumpnail2} />
            </div>
            <div className="rank">
                {[...Array(item.evaluate_star)].map((item, index) => (
                    <FontAwesomeIcon icon={faStar} className="star" size="sm" key={index} />
                ))}
            </div>
            <div className="topic2 name fw-bolder" style={{ fontSize: 17, marginTop: 10, marginBottom: 5 }}>
                <a href={`/storeDetail/${item.productid}`}>
                    <h4>{item.product_name}</h4>
                </a>
            </div>
            <div className="price">
                <h6>{item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h6>
            </div>
            <div className="action">
                <button
                    className="addToCartBtn"
                    onClick={() => {
                        handleAddProductToCart(userId, item.productid, productquantity);
                    }}
                >
                    {t('addToCart')}
                </button>
            </div>
        </div>
    );
}

export default Store;
