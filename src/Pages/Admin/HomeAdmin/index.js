import './HomeAdmin.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Card from '../../../components/Card';
function HomeAdmin() {
    return (
        <div className="content">
            <div className="div-title">
                <p className="my-0"> Database hoa don</p>
            </div>
            <div className="div-content">
                <h1>Thống kê</h1>
                <Row>
                    <Col className="col-3 my-2">
                        <Card />
                    </Col>
                    <Col className="col-3 my-2">
                        <Card />
                    </Col>
                    <Col className="col-3 my-2">
                        <Card />
                    </Col>
                    <Col className="col-3 my-2">
                        <Card />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default HomeAdmin;
