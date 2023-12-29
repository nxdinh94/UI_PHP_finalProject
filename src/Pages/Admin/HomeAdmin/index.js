import './HomeAdmin.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Card from '../../../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import {
    handleCountListPendingBillThunk,
    handleCountListStaffThunk,
    handleCountListUserThunk,
    handleCountListProductThunk,
    handleCountListServicesThunk,
    handleCountListPendingServiceThunk,
    handleCountListStatusUnpaymentServicesThunk,
} from '~/features/CountQuantity/CountQuantitySlices';
function HomeAdmin() {
    const dispatch = useDispatch();
    dispatch(handleCountListPendingBillThunk());
    dispatch(handleCountListStaffThunk());
    dispatch(handleCountListUserThunk());
    dispatch(handleCountListProductThunk());
    dispatch(handleCountListServicesThunk());
    dispatch(handleCountListPendingServiceThunk());
    dispatch(handleCountListStatusUnpaymentServicesThunk());

    const staffQuantity = useSelector((state) => state.countQuantitySlices.value.countStaff);
    const userQuantity = useSelector((state) => state.countQuantitySlices.value.countUser);
    const productQuantity = useSelector((state) => state.countQuantitySlices.value.countProduct);
    const servicesQuantity = useSelector((state) => state.countQuantitySlices.value.countServices);
    const pendingServicesQuantity = useSelector((state) => state.countQuantitySlices.value.countPendingServices);
    const pendingBillQuantity = useSelector((state) => state.countQuantitySlices.value.countpendingBill);
    const servicesPaidQuantity = useSelector((state) => state.countQuantitySlices.value.countServiesPaid);
    return (
        <div className="content">
            <div className="div-title">
                <p className="my-0"> Trang chủ</p>
            </div>
            <div className="div-content">
                <h1>Thống kê</h1>
                <Row>
                    <Col className="col-3 my-2">
                        <Card title="Số lượng nhân viên" number={staffQuantity} colorBorder="green" />
                    </Col>
                    <Col className="col-3 my-2">
                        <Card title="Số lượng khách hàng" number={userQuantity} colorBorder="#EC5078" />
                    </Col>
                    <Col className="col-3 my-2">
                        <Card title="Số lượng sản phẩm" number={productQuantity} colorBorder="cyan" />
                    </Col>
                    <Col className="col-3 my-2">
                        <Card title="Số lượng dịch vụ" number={servicesQuantity} colorBorder="yellow" />
                    </Col>
                    <Col className="col-3 my-2">
                        <Card title="Số đơn hàng chờ duyệt" number={pendingBillQuantity} colorBorder="orange" />
                    </Col>
                    <Col className="col-3 my-2">
                        <Card title="Số dịch vụ chờ duyệt" number={pendingServicesQuantity} colorBorder="#dddddd" />
                    </Col>
                    <Col className="col-3 my-2">
                        <Card title="Dịch vụ thanh toán chờ duyệt" number={servicesPaidQuantity} colorBorder="wheat" />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default HomeAdmin;
