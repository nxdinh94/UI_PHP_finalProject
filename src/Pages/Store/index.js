import './Store.scss';

import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function Store() {
    const productData = useSelector((state) => state.storeSlices.value);
    console.log(productData);
    return (
        <Container className="my-5">
            <Row>
                {productData.map((item, key) => (
                    <Col lg="3" md="4" sm="6" className="store-col" key={key}>
                        <div className="product-wrapper">
                            <div className="product">
                                <img src={item.thumpnail2} />
                            </div>
                            <div className="rank">
                                {[...Array(item.evaluate_star)].map((key) => (
                                    <FontAwesomeIcon icon={faStar} className="star" size="sm" key={key} />
                                ))}
                            </div>
                            <div
                                className="topic2 name fw-bolder"
                                style={{ fontSize: 17, marginTop: 10, marginBottom: 5 }}
                            >
                                <a href="/storeDetail/1">
                                    <h4>{item.product_name}</h4>
                                </a>
                            </div>
                            <div className="price">
                                <h6>{item.price}</h6>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Store;
