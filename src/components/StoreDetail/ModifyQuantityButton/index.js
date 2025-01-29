import './ModifyQuantityButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

export default function ModifyQuantityButton({ quantity, setQuantity }) {
    return (
        <div className="modify-quantity">
            <FontAwesomeIcon
                className={quantity <= 0 ? 'disabled' : ''}
                icon={faLessThan}
                size="sm"
                onClick={() => {
                    setQuantity((prev) => prev - 1);
                }}
            />
            <span>{quantity}</span>
            <FontAwesomeIcon
                icon={faGreaterThan}
                size="sm"
                onClick={() => {
                    setQuantity((prev) => prev + 1);
                }}
            />
        </div>
    );
}
