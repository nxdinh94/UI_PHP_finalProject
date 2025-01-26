import { useTranslation } from 'react-i18next';
import './SiblingComponent.scss';

//string, array
export default function SiblingComponent({ sibling1, sibling2 }) {
    const { t } = useTranslation();
    return (
        <>
            <p>
                <img className="iconCat" src={'/images/icons8/icons8-cat-footprint-16.png'} />
                <span className="sibling1">{t(sibling1.toString())}</span>
            </p>
            <h2 className="sibling2">
                {sibling2.map((item, index) => {
                    if (index != sibling2.length - 1) {
                        return (
                            <div key={index}>
                                {t(item.toString())}
                                <br />
                            </div>
                        );
                    }
                    return t(item.toString());
                })}
            </h2>
        </>
    );
}
