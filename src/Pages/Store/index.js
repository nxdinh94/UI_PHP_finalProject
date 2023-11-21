import './Store.scss';

import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Store() {
    return (
        <Container className="my-5">
            <Row>
                <Col lg="3" md="4" sm="6" className="store-col">
                    <div className="product-wrapper">
                        <div className="product">
                            <img src="/images/product/product-1.jpg" />
                        </div>
                        <div className="rank">
                            <FontAwesomeIcon icon={faStar} className="star" size="sm" />
                            <FontAwesomeIcon icon={faStar} className="star" size="sm" />
                            <FontAwesomeIcon icon={faStar} className="star" size="sm" />
                            <FontAwesomeIcon icon={faStar} className="star" size="sm" />
                        </div>
                        <div className="topic2 name fw-bolder" style={{ fontSize: 17, marginTop: 10, marginBottom: 5 }}>
                            <Link to="/storeDetail/1">
                                <h4>Artikel products-pet</h4>
                            </Link>
                        </div>
                        <div className="price">
                            <h6>$112.00</h6>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Store;
