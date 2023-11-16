import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
function Card() {
    return (
        <div className="card-wrapper">
            <div className="card-content">
                <p>Doanh thu</p>
                <h4>0 VND</h4>
            </div>
            <div className="card-icon">
                <FontAwesomeIcon icon={faDollarSign} size='2xl' />
            </div>
        </div>
    );
}

export default Card;
