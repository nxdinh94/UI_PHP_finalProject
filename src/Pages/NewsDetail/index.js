import './NewsDetail.scss';
import { Container, Col, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function NewsDetail({}) {
    let { slug, cate } = useParams();
    const dataCate = useSelector((state) => state.newsSlices.value);
    const dataByCate = dataCate[cate];

    const dataDetail = dataByCate.filter((item) => {
        return item.slug == slug;
    });
    return (
        <Container>
            <Row>
                <Col lg="8" className="newDetail-wrapper">
                    <div>
                        <img className="img-fluid newDetail-image" src={dataDetail[0].thumbnail} />
                    </div>
                    <div className="newDetail-content">
                        <div className="newDetail-detail"></div>
                        <div className="newDetail-title">
                            <h2 className="topic2">{dataDetail[0].title}</h2>
                            <p className="p-text">{dataDetail[0].content}</p>
                        </div>
                    </div>
                </Col>
                <Col lg="4"></Col>
            </Row>
        </Container>
    );
}
export default NewsDetail;
