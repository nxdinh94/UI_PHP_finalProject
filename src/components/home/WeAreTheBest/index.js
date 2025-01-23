import { useTranslation } from 'react-i18next';
import SiblingComponent from '~/components/common/SiblingComponent';

export default function WeAreTheBest() {
    const WeAreTheBestList = ['weAreTheBestItem1', 'weAreTheBestItem2', 'weAreTheBestItem3', 'weAreTheBestItem4'];

    const { t } = useTranslation();

    return (
        <>
            <div>
                <SiblingComponent sibling1={'weProvided'} sibling2={['weAreTheBest']} />
            </div>
            <p className="p-text">{t('describeWeAreTheBest')}</p>

            <ul className="w-list">
                {WeAreTheBestList.map((item, index) => {
                    return (
                        <li key={index}>
                            <p>{t(item)}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
