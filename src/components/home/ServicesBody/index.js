import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faUser } from '@fortawesome/free-solid-svg-icons';
import './ServicesBody.scss';

export default function ServicesBody({serviceData}) {
    return (
        <div className="post-pet-care-body">
            <Row>
                {serviceData.slice(0, 4).map((item, index) => {
                    return (
                        <Col lg="6" style={{ marginBottom: 24 }}>
                            <div className="service-display-wrapper">
                                <div className="service-display-image">
                                    <img src={item.icon} />
                                </div>
                                <div className="service-display-content">
                                    <span className="p-text">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span className="p-text ms-2">By {item.author || 'Admin'}</span>
                                    </span>
                                    <h1 className="content-title">
                                        <a>{item.name}</a>
                                    </h1>
                                    <a className="loadmore" href={`/services/${item.slug}/detail`}>
                                        <span>Load More</span>
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}
