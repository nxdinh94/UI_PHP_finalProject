import './TeamAchieveItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function TeamAchieveItem({ icon, heading, discription, style }) {
    return (
        <div className="team-wrap">
            <div className="wrapper-icon" style={style}>
                <FontAwesomeIcon icon={icon} className="team-achieve-icon" />
            </div>
            <div className="team-content">
                <h2>{heading}</h2>
                <p>{discription}</p>
            </div>
        </div>
    );
}
