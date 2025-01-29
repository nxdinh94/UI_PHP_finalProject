import './AddToCartButton.scss';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import handleAddProductToCart from '~/utils/handleAddProductToCart';
export default function AddToCartButton({ userId, productid, quantity }) {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    return (
        <button
            className="add-cart"
            onClick={() => {
                handleAddProductToCart(userId, productid, quantity, dispatch);
            }}
        >
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
            <p>{t('addToCart')}</p>
        </button>
    );
}
