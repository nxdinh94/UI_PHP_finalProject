import './Team.scss';

import { faFacebook, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
function Team() {
    let dataSlices = useSelector((state) => state.teamSlices.value);
    // console.log(dataSlices);
    const { category } = useParams();
    // console.log(category);
    const [dataTeam, setDataTeam] = useState([dataSlices]);
    useEffect(() => {
        if (category) {
            let dataByCate = dataSlices.filter((item) => {
                return item.position_id == category;
            });
            setDataTeam(dataByCate);
        } else setDataTeam(dataSlices);
    }, [dataSlices]);
    return (
        <Container className="my-5">
            <Row>
                {dataTeam.map((data, index) => (
                    <Col key={index} lg="3" md="4" sm="6" className="team-col">
                        <div className="avt-wrapper">
                            <div className="avt">
                                <img src={data.avatar} />
                            </div>
                            <div className="name">
                                <Link to={`/team/${data.id}/detail`}>
                                    <h4>{data.fullname}</h4>
                                </Link>
                            </div>
                            <div className="position">
                                <h6>{data.name}</h6>
                            </div>
                            <div className="social">
                                <div className="social-icon">
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        size="lg"
                                        className="facebook-icon"
                                        style={{ color: 'red' }}
                                    />
                                </div>
                                <div className="social-icon">
                                    <FontAwesomeIcon icon={faTiktok} size="lg" />
                                </div>
                                <div className="social-icon">
                                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Team;
