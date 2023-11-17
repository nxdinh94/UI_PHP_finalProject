import { Container, Col, Row } from 'reactstrap';
import './TeamDetail.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Tooltip } from 'react-tippy';
import { useState } from 'react';
import Toastify from '~/components/Toastify';
import { toast } from 'react-toastify';
function TeamDetail() {
    const [isShowTooltip, setIsShowTooltip] = useState(false);

    const { slug } = useParams();

    let dataSlices = useSelector((state) => state.teamSlices.value);
    let specificPerson = dataSlices.filter((item) => {
        return item.id.toString() === slug;
    });
    // console.log(specificPerson);
    return (
        <Container className="my-5">
            <Toastify />
            <Row>
                <Col lg="6" sm="12">
                    <div className="team-avt">
                        <img className="img-fluid" src={specificPerson[0].avatar} />
                    </div>
                </Col>
                <Col lg="6" sm="12">
                    <div className="team-infor">
                        <div className="team-name">
                            <h3>{specificPerson[0].fullname}</h3>
                            <p className="fw-bold my-0">{specificPerson[0].name}</p>
                        </div>
                        <div className="detail-infor">
                            <ul className="list-in4">
                                <li className="specific-in4">
                                    <span className="label">Position</span>
                                    <span className="p-text">{specificPerson[0].name}</span>
                                </li>
                                <li className="specific-in4">
                                    <span className="label">Experience</span>
                                    <span className="p-text">{specificPerson[0].experience} Years Of Experience</span>
                                </li>
                                <li className="specific-in4">
                                    <span className="label">Email</span>
                                    <span className="p-text">{specificPerson[0].email}</span>
                                </li>
                                <li className="specific-in4">
                                    <span className="label">Phone</span>
                                    <span className="p-text">{specificPerson[0].phone}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="team-social">
                            <h3>Share link :</h3>

                            <Tooltip
                                title="Welcome to React"
                                position="bottom"
                                trigger="click focus"
                                interactive
                                open={isShowTooltip}
                                duration={3000}
                                html={
                                    <span
                                        style={{ color: ' #ec5078', cursor: 'pointer' }}
                                        onClick={() => {
                                            navigator.clipboard.writeText('https://facebook.com/huyln11');
                                            toast('Copied to clipboard', { hideProgressBar: true , autoClose: 1000});
                                        }}
                                    >
                                        https://facebook.com/huyln11
                                    </span>
                                }
                            >
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    size="xl"
                                    className="icon"
                                    onMouseOver={() => setIsShowTooltip(true)}
                                    onMouseOut={() =>
                                        setTimeout(() => {
                                            setIsShowTooltip(false);
                                        }, 3000)
                                    }
                                />
                            </Tooltip>

                            <FontAwesomeIcon icon={faTiktok} size="xl" className="icon" />
                            <FontAwesomeIcon icon={faTwitter} size="xl" className="icon" />
                            <FontAwesomeIcon icon={faPinterest} size="xl" className="icon" />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="team-descript">
                    <div className="about-header">
                        <h2>Experience about me</h2>
                    </div>
                    <div className="about-content">
                        <p className="p-text py-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum
                        </p>
                    </div>
                </div>
            </Row>
            <Row>
                <Col lg="6">
                    <div className="team-skill">skill</div>
                </Col>
                <Col lg="6">
                    <div className="team-award">award</div>
                </Col>
            </Row>
        </Container>
    );
}

export default TeamDetail;
