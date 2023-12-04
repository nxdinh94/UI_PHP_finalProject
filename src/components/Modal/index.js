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
        <div className='modal-wrapper'>
            <Button className='btn-toggle' color="danger" onClick={toggle}>
                Xem thi tiết
            </Button>
            <Modal isOpen={modal} size='lg' toggle={toggle} className="modal-wrapper">
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                    <div className="modal-body-content">
                        <h2 className="pet-name topic2 my-2">{petDetail.name}</h2>
                        <div className="list-in4">
                            <ul>
                                <li>
                                    <span>Nguồn gốc: </span> <span>{petDetail.origin}</span>
                                </li>
                                <li>
                                    <span>Kiểu lông: </span> <span>{petDetail.fur_style}</span>
                                </li>
                                <li>
                                    <span>Màu lông: </span> <span>{petDetail.fur_color}</span>
                                </li>
                                <li>
                                    <span>Cân nặng: </span> <span>{petDetail.weight}</span>
                                </li>
                                <li>
                                    <span>Tuổi thọ trung bình: </span> <span>{petDetail.longevity}</span>
                                </li>
                                <li>
                                    <span>Mô tả: </span> <span>{petDetail.descr}</span>
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

export default Model;
