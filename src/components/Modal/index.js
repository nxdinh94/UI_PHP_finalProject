import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from 'reactstrap';
import './Modal.scss';

function Model({ petDetail }) {
    // Modal open state
    const [modal, setModal] = React.useState(false);

    // Toggle for Modal
    const toggle = () => setModal(!modal);

    return (
        <div
            style={{
                display: 'block',
                width:'100%',
                padding: 30,
            }}
        >
            <Button color="danger" onClick={toggle}>
                Xem thi tiết
            </Button>
            <Modal isOpen={modal} toggle={toggle} className="modal-wrapper">
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                    <div className="modal-body-content">
                        <h2 className="pet-name">{petDetail.name}</h2>
                        <div className="list-in4">
                            <ul>
                                <li>
                                    <span>Nguồn gốc: </span> <span>{petDetail.original}</span>
                                </li>
                                <li>
                                    <span>Ngoại hình: </span> <span>{petDetail.apprearance}</span>
                                </li>
                                <li>
                                    <span>Màu lông: </span> <span>{petDetail.furColor}</span>
                                </li>
                                <li>
                                    <span>Cân nặng: </span> <span>{petDetail.weight}</span>
                                </li>
                                <li>
                                    <span>Tuổi thọ trung bình: </span> <span>{petDetail.longevity}</span>
                                </li>
                                <li>
                                    <span>Mô tả: </span> <span className='px-3'>{petDetail.description}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pet-thumnail">
                            <img src={petDetail.thumnail} className="thumnail" />
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default Model;
