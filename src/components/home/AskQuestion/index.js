import './AskQuestion.scss';
import { Row, Col } from 'reactstrap';
import { useState } from 'react';
import SiblingComponent from '../../common/SiblingComponent';
import { useTranslation } from 'react-i18next';
export default function AskQuestion() {
    const { t } = useTranslation();
    const [openQuestionGuide, setOpenQuestionGuide] = useState(Array(5).fill(false));

    const handleToggleQuestionGuide = (key) => {
        const newState = [...openQuestionGuide];

        if (newState[key]) {
            newState.fill(false);
        } else {
            newState.fill(false);
            newState[key] = !newState[key];
        }

        setOpenQuestionGuide(newState);
    };

    return (
        <div className="ask-question-wrapper container">
            <Row>
                <Col md="5">
                    <div className="ask-question-right">
                        <SiblingComponent
                            sibling1={'askedquestion'}
                            sibling2={['wearealways', 'readyforyour', 'anyquestion']}
                        />
                        <p className="p-text my-4">
                            Please ask any questions you have about us, we are happy to answer your questions. Go to the
                            contact page now!!!
                        </p>
                        <div className="btn-area">
                            <button
                                onClick={() => {
                                    window.location.href = '/contact';
                                }}
                                className="btn-discover"
                            >
                                {t('contactnow')}
                            </button>
                        </div>
                    </div>
                </Col>
                <Col md="7" className="p-4">
                    <div className="ask-question-left" key="0">
                        <div
                            className="item-open"
                            onClick={() => {
                                handleToggleQuestionGuide(0);
                            }}
                        >
                            How to contact with our customer featire?
                        </div>
                        {openQuestionGuide[0] && (
                            <div
                                className="item-toggle p-text"
                                style={{ animation: `${openQuestionGuide[0] ? 'fadeIn' : 'fadeOut'} 1s` }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat explicabo, animi
                                soluta veniam aspernatur ut iusto incidunt hic quas sequi dolores neque quis, sit odit
                                minima modi nemo.
                            </div>
                        )}
                    </div>
                    <div className="ask-question-left" key="1">
                        <div
                            className="item-open"
                            onClick={() => {
                                handleToggleQuestionGuide(1);
                            }}
                        >
                            Is there any customer pricing system?
                        </div>
                        {openQuestionGuide[1] && (
                            <div
                                className="item-toggle p-text"
                                style={{ animation: `${openQuestionGuide[1] ? 'fadeIn' : 'fadeOut'} 1s` }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat explicabo, animi
                                soluta veniam aspernatur ut iusto incidunt hic quas sequi dolores neque quis, sit odit
                                minima modi nemo.
                            </div>
                        )}
                    </div>
                    <div className="ask-question-left" key="2">
                        <div
                            className="item-open"
                            onClick={() => {
                                handleToggleQuestionGuide(2);
                            }}
                        >
                            Where is the edit options on deshboard?
                        </div>
                        {openQuestionGuide[2] && (
                            <div
                                className="item-toggle p-text"
                                style={{ animation: `${openQuestionGuide[2] ? 'fadeIn' : 'fadeOut'} 1s` }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat explicabo, animi
                                soluta veniam aspernatur ut iusto incidunt hic quas sequi dolores neque quis, sit odit
                                minima modi nemo.
                            </div>
                        )}
                    </div>
                    <div className="ask-question-left" key="3">
                        <div
                            className="item-open"
                            onClick={() => {
                                handleToggleQuestionGuide(3);
                            }}
                        >
                            How to update the latest version?
                        </div>
                        {openQuestionGuide[3] && (
                            <div
                                className="item-toggle p-text"
                                style={{ animation: `${openQuestionGuide[3] ? 'fadeIn' : 'fadeOut'} 1s` }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat explicabo, animi
                                soluta veniam aspernatur ut iusto incidunt hic quas sequi dolores neque quis, sit odit
                                minima modi nemo.
                            </div>
                        )}
                    </div>
                    <div className="ask-question-left" key="4">
                        <div
                            className="item-open"
                            onClick={() => {
                                handleToggleQuestionGuide(4);
                            }}
                        >
                            How to contact with our customer featire?
                        </div>
                        {openQuestionGuide[4] && (
                            <div
                                className="item-toggle p-text"
                                style={{ animation: `${openQuestionGuide[4] ? 'fadeIn' : 'fadeOut'} 1s` }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat explicabo, animi
                                soluta veniam aspernatur ut iusto incidunt hic quas sequi dolores neque quis, sit odit
                                minima modi nemo.
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
}
