import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Table } from 'reactstrap';

import './DuyetDV.scss';

import { handleGetAllPendingBill, handleAcceptBill } from '~/service/adminService';
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
            const dt = await handleGetAllPendingBill();
            setData(dt);
        };
        fetchData();
    }, []);
    const handleAcceptRegisterService = async (billId) => {
        const res = await handleAcceptBill(billId);
        console.log('res', res);
        if (res.status) {
            toast.success(res.message);
            const dt = await handleGetAllPendingBill();
            setData(dt);
        }
    };

    return (
        <div className="content">
            <Toastify />
            <div className="div-title">
                <p className="my-0"> Database hoa don</p>
            </div>
            <div className="div-content">
                <h1>Thống kê</h1>
                <Row>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className="fw-bold">Họ tên</th>
                                <th className="fw-bold">Email</th>
                                <th className="fw-bold">Mã đơn hàng</th>
                                <th className="fw-bold">Sản phẩm</th>
                                <th className="fw-bold">Ngày tạo</th>
                                <th className="fw-bold">PT thanh toán</th>
                                <th className="fw-bold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.status &&
                                Object.keys(data.data).map((objectKey) => {
                                    let dataItem = data.data[objectKey];
                                    return (
                                        <tr key={objectKey}>
                                            <td>{dataItem.username}</td>
                                            <td>{dataItem.email}</td>
                                            <td>{objectKey}</td>
                                            <td>
                                                {dataItem.products.map((item, index) => (
                                                    <p key={index}>
                                                        <span>{item.product_name}</span>
                                                        <span>{item.quantity}</span>
                                                        <span>{item.price}</span>
                                                    </p>
                                                ))}
                                            </td>
                                            <td>{dataItem.created_at}</td>
                                            <td>{dataItem.payment_method}</td>
                                            <td>
                                                <button
                                                    onClick={() => {
                                                        handleAcceptRegisterService(objectKey);
                                                    }}
                                                    className="btn btn-primary mx-1 duyet"
                                                >
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>
                </Row>
            </div>
        </div>
    );
}

export default DuyetDV;
