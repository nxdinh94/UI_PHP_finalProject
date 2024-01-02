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
function Store() {
    const productData = useSelector((state) => state.storeSlices.value);
    let userData = '';
    let isLogin = sessionStorage.isLogin;
    let userId = '';
    if (isLogin) {
        userData = JSON.parse(sessionStorage.getItem('user_data'));
        isLogin = sessionStorage.isLogin;
        userId = userData.id;
    }

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const handleAddProductToCart = async (userid, productid, productquantity) => {
        const res = await handleAddProductToCartApi(userid, productid, productquantity);
        dispatch(handleFetchQuantityProductInCartThunk(userId));
        if (res.status) {
            toast.success('Đã thêm vào giỏ hàng', { position: 'bottom-right' });
        } else toast.error('Vui lòng đăng nhập để thực hiện chức năng');
    };
    return (
        <Container className="my-5">
            <Toastify />
            <Row>
                {productData.map((item, key) => (
                    <Col lg="3" md="4" sm="6" className="store-col" key={key}>
                        <div className="product-wrapper">
                            <div className="product">
                                <img src={item.thumpnail2} />
                            </div>
                            <div className="rank">
                                {[...Array(item.evaluate_star)].map((item, key) => (
                                    <FontAwesomeIcon icon={faStar} className="star" size="sm" key={key} />
                                ))}
                            </div>
                            <div
                                className="topic2 name fw-bolder"
                                style={{ fontSize: 17, marginTop: 10, marginBottom: 5 }}
                            >
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
                                        handleAddProductToCart(userId, item.productid, 1);
                                    }}
                                >
                                    {t('addToCart')}
                                </button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Store;
