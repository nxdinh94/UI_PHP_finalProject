import React from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import './Modal.scss';

import { useTranslation } from 'react-i18next';

function MyModal({ petDetail }) {
    // Modal open state
    const [modal, setModal] = React.useState(false);
    const { t } = useTranslation();
    // Toggle for Modal
    const toggle = () => setModal(!modal);

    return (
        <div className="modal-wrapper">
            <Button className="btn-toggle" color="danger" onClick={toggle}>
                {t('viewDetail')}
            </Button>
            <Modal isOpen={modal} size="lg" toggle={toggle} className="modal-wrapper">
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                    <div className="modal-body-content">
                        <h2 className="pet-name topic2 my-2">{petDetail.name}</h2>
                        <div className="list-in4">
                            <ul>
                                <li>
                                    <span>{`${t('petInf.origin')}:`} </span> <span>{petDetail.origin}</span>
                                </li>
                                <li>
                                    <span>{`${t('petInf.hairStyle')}:`} </span> <span>{petDetail.fur_style}</span>
                                </li>
                                <li>
                                    <span>{`${t('petInf.hairColor')}:`} </span> <span>{petDetail.fur_color}</span>
                                </li>
                                <li>
                                    <span>{`${t('petInf.weight')}:`} </span> <span>{petDetail.weight}</span>
                                </li>
                                <li>
                                    <span>{`${t('petInf.longevity')}:`} </span> <span>{petDetail.longevity}</span>
                                </li>
                                <li>
                                    <span>{`${t('petInf.describe')}:`} </span> <span>{petDetail.descr}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pet-thumnail">
                            <img src={petDetail.thumbnail} className="thumnail" />
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default MyModal;
