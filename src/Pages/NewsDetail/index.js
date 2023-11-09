import './NewsDetail.scss';
import {Container, Col, Row} from 'reactstrap';
import { useParams } from 'react-router-dom';
function NewsDetail({ postDetail }) {
    let { slug } = useParams();
    console.log('checkpostdetail' ,postDetail);
    return (
        <Container>
            <Row>
                <Col></Col>
            </Row>
        </Container>
    );
}
export default NewsDetail;
