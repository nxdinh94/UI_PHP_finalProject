import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Table } from 'reactstrap';

import './DuyetThanhToanDichVu.scss';

import { handleGetAllPaidAndUnPaidService, handleAcceptPaidService } from '~/service/adminService';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import Toastify from '~/components/Toastify';
import { toast } from 'react-toastify';

function DuyetThanhToanDichVu() {
    const [data, setData] = useState([]);
    // console.log('data', data);

    const fetchData = async () => {
        const dt = await handleGetAllPaidAndUnPaidService();

        setData(dt);
    };
    useEffect(() => {
        fetchData();
    }, []);
    const handleAcceptRegisterService = async (userId, serviceId) => {
        const res = await handleAcceptPaidService(userId, serviceId);
        console.log('res', res);
        if (res.status) {
            toast.success(res.message);
            const dt = await handleGetAllPaidAndUnPaidService();
            setData(dt);
        }
    };

    return (
        <div className="content">
            <Toastify />
            <div className="div-title">
                <p className="my-0"> Duyệt thanh toán dịch vụ</p>
            </div>
            <div className="div-content">
                <h1>Danh sách</h1>
                <Row>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className="fw-bold">Email</th>
                                <th className="fw-bold">Mã dịch vụ</th>
                                <th className="fw-bold">Tên dịch vụ</th>
                                <th className="fw-bold">Ngày tạo</th>
                                <th className="fw-bold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.status &&
                                data.data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.serviceid}</td>
                                        <td>{item.serviceName}</td>
                                        <td>{item.created_at}</td>
                                        <td>
                                            {item.payment_status === 0 && (
                                                <button
                                                    onClick={async () => {
                                                        const res = await handleAcceptPaidService(
                                                            item.userid,
                                                            item.serviceid,
                                                        );
                                                        if (res.status) {
                                                            toast.success('Duyệt thành công');
                                                            fetchData();
                                                        } else toast.error('Duyệt thất bại');
                                                    }}
                                                    className="btn btn-primary mx-1 duyet"
                                                >
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </button>
                                            )}
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

export default DuyetThanhToanDichVu;
