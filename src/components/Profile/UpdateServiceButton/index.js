import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
export default function UpdateServiceButton({ myKey, onHandleUpdateServiceBtn }) {
    return (
        <button
            onClick={() => {
                onHandleUpdateServiceBtn(myKey);
            }}
            className="btn btn-primary me-2"
        >
            <FontAwesomeIcon icon={faPenToSquare} className="profile-icon" />
        </button>
    );
}
