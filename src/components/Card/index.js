import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
function Card({ title, number, colorBorder }) {
    return (
        <div className="card-wrapper" style={{ borderLeft: `4px solid ${colorBorder}` }}>
            <div className="card-content">
                <p>{title}</p>
                <h5>{number}</h5>
            </div>
            <div className="card-icon">
                <FontAwesomeIcon icon={faDollarSign} size="2xl" />
            </div>
        </div>
    );
}

export default Card;
