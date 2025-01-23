import './CheckingTime.scss';
import SiblingComponent from '~/components/common/SiblingComponent';
import { useTranslation } from 'react-i18next';

export default function CheckingTime() {
    const { t } = useTranslation();
    return (
        <div className="checkin">
            <SiblingComponent sibling1={'checkinTime'} sibling2={['wealwaysbringHappyness']} />
            <p className="p-text">{t('describewealwaysbringHappyness')}</p>

            <ul className="checkin-list">
                <li className="checkin-item">
                    <p className="h5">{`${t('from')} 9:00 ${t('to')} 21:00`}</p>
                    <p className="checkin-script p-text">{t('text1')}</p>
                </li>
                <li className="checkin-item">
                    <p className="h5">{t('emergencyService')}</p>
                    <p className="checkin-script p-text">{t('text2')}</p>
                </li>
            </ul>
        </div>
    );
}
