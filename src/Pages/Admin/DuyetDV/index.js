import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Table } from 'reactstrap';

import './DuyetDV.scss';

import { handleGetPendingService, handleAcceptRegisterServiceApi } from '~/service/adminService';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import Toastify from '~/components/Toastify';
import { toast } from 'react-toastify';

function DuyetDV() {
    const [data, setData] = useState([]);

    // console.log('data', data);
    useEffect(() => {
        const fetchData = async () => {
            const dt = await handleGetPendingService();
            setData(dt);
        };
        fetchData();
    }, []);
    const handleAcceptRegisterService = async (userId, serviceId) => {
        const res = await handleAcceptRegisterServiceApi(userId, serviceId);
        if (res.status) {
            toast.success(res.message);
            const dt = await handleGetPendingService();
            setData(dt);
        }
    };

    return (
        <div className="content">
            <Toastify />
            <div className="div-title">
                <p className="my-0"> Duyệt dịch vụ</p>
            </div>
            <div className="div-content">
                <h1>Danh sách</h1>
                <Row>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className="fw-bold">Full Name</th>
                                <th className="fw-bold">Email</th>
                                <th className="fw-bold">Tên dịch vụ</th>
                                <th className="fw-bold">Ngày dùng</th>
                                <th className="fw-bold">Buổi</th>
                                <th className="fw-bold">Thanh toán</th>
                                <th className="fw-bold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.status &&
                                data.data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.fullname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.name}</td>
                                        <td>{item.register_day}</td>
                                        <td>
                                            {item.periodTime === 1 ? '7h-11h' : ''}
                                            {item.periodTime === 2 ? '13h-17h' : ''}
                                            {item.periodTime === 3 ? 'All day' : ''}
                                        </td>
                                        <td>{item.payment_status === 1 ? 'Đã thanh toán' : 'Chưa thanh toán'}</td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    handleAcceptRegisterService(item.userid, item.id);
                                                }}
                                                className="btn btn-primary mx-1 duyet"
                                            >
                                                <FontAwesomeIcon icon={faCheck} />
                                            </button>
                                            <button className="btn btn-danger cancel">
                                                <FontAwesomeIcon icon={faX} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Row>
            </div>
        </div>
    );
}

export default DuyetDV;
