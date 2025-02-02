import './CancelServiceButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function CancelServiceButton({ userId, serviceId, onHandleCancelService }) {
    return (
        <button className="btn btn-danger mx-2" onClick={() => onHandleCancelService(userId, serviceId)}>
            <FontAwesomeIcon icon={faXmark} className="profile-icon" />
        </button>
    );
}
