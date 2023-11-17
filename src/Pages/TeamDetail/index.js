import { Container, Col, Row } from 'reactstrap';
import './TeamDetail.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faAward } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Tooltip } from 'react-tippy';
import { useState } from 'react';
import Toastify from '~/components/Toastify';
import { toast } from 'react-toastify';
function TeamDetail() {
    const [isShowFbTooltip, setIsFbShowTooltip] = useState(false);
    const [isTiktokShowTooltip, setIsTiktokShowTooltip] = useState(false);
    const [isTwitterShowTooltip, setIsTwitterShowTooltip] = useState(false);
    const [isPinterestShowTooltip, setIsPinterestShowTooltip] = useState(false);

    const { slug } = useParams();

    let dataSlices = useSelector((state) => state.teamSlices.value);
    let specificPerson = dataSlices.filter((item) => {
        return item.id.toString() === slug;
    });
    console.log(specificPerson);
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
                                trigger="manual"
                                interactive
                                open={isShowFbTooltip}
                                html={
                                    <div className="div-tippy">
                                        <span
                                            style={{ color: ' #ec5078', cursor: 'pointer' }}
                                            onClick={() => {
                                                navigator.clipboard.writeText(specificPerson[0].facebook);
                                                toast.success('Copied to clipboard', {
                                                    hideProgressBar: true,
                                                    autoClose: 1000,
                                                });
                                            }}
                                        >
                                            {specificPerson[0].facebook}
                                        </span>
                                    </div>
                                }
                            >
                                <div className="wrap-icon"></div>
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    size="xl"
                                    className="icon"
                                    onMouseOver={() => setIsFbShowTooltip(true)}
                                    onMouseOut={() =>
                                        setTimeout(() => {
                                            setIsFbShowTooltip(false);
                                        }, 800)
                                    }
                                />
                            </Tooltip>
                            <Tooltip
                                title="Welcome to React"
                                position="bottom"
                                trigger="click focus"
                                interactive
                                open={isTiktokShowTooltip}
                                html={
                                    <div className="div-tippy">
                                        <span
                                            style={{ color: ' #ec5078', cursor: 'pointer' }}
                                            onClick={() => {
                                                navigator.clipboard.writeText(specificPerson[0].tiktok);
                                                toast.success('Copied to clipboard', {
                                                    hideProgressBar: true,
                                                    autoClose: 1000,
                                                });
                                            }}
                                        >
                                            {specificPerson[0].tiktok}
                                        </span>
                                    </div>
                                }
                            >
                                <FontAwesomeIcon
                                    icon={faTiktok}
                                    size="xl"
                                    className="icon"
                                    onMouseOver={() => setIsTiktokShowTooltip(true)}
                                    onMouseOut={() =>
                                        setTimeout(() => {
                                            setIsTiktokShowTooltip(false);
                                        }, 800)
                                    }
                                />
                            </Tooltip>
                            <Tooltip
                                title="Welcome to React"
                                position="bottom"
                                trigger="click focus"
                                interactive
                                open={isTwitterShowTooltip}
                                html={
                                    <div className="div-tippy">
                                        <span
                                            style={{ color: ' #ec5078', cursor: 'pointer' }}
                                            onClick={() => {
                                                navigator.clipboard.writeText(specificPerson[0].twitter);
                                                toast.success('Copied to clipboard', {
                                                    hideProgressBar: true,
                                                    autoClose: 1000,
                                                });
                                            }}
                                        >
                                            {specificPerson[0].twitter}
                                        </span>
                                    </div>
                                }
                            >
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    size="xl"
                                    className="icon"
                                    onMouseOver={() => setIsTwitterShowTooltip(true)}
                                    onMouseOut={() =>
                                        setTimeout(() => {
                                            setIsTwitterShowTooltip(false);
                                        }, 800)
                                    }
                                />
                            </Tooltip>
                            <Tooltip
                                title="Welcome to React"
                                position="bottom"
                                trigger="click focus"
                                interactive
                                open={isPinterestShowTooltip}
                                html={
                                    <div className="div-tippy">
                                        <span
                                            style={{ color: ' #ec5078', cursor: 'pointer' }}
                                            onClick={() => {
                                                navigator.clipboard.writeText(specificPerson[0].pinterest);
                                                toast.success('Copied to clipboard', {
                                                    hideProgressBar: true,
                                                    autoClose: 1000,
                                                });
                                            }}
                                        >
                                            {specificPerson[0].pinterest}
                                        </span>
                                    </div>
                                }
                            >
                                <FontAwesomeIcon
                                    icon={faPinterest}
                                    size="xl"
                                    className="icon"
                                    onMouseOver={() => setIsPinterestShowTooltip(true)}
                                    onMouseOut={() =>
                                        setTimeout(() => {
                                            setIsPinterestShowTooltip(false);
                                        }, 800)
                                    }
                                />
                            </Tooltip>
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
                        <p className="p-text py-4">{specificPerson[0].about}</p>
                    </div>
                </div>
            </Row>
            <Row className="my-4">
                <Col lg="6">
                    <div className="team-skill">
                        <div className="header-skill">
                            <h4> Personal skill care</h4>
                        </div>
                        <div className="allskill">
                            <div className="skill skill1">
                                <span className="value p-text fw-bold">Pet Rooming</span>
                                <span className="value p-text fw-bold">85%</span>
                            </div>
                            <div className="skill skill2">
                                <span className="value p-text fw-bold">Pet Rooming</span>
                                <span className="value p-text fw-bold">75%</span>
                            </div>
                            <div className="skill skill3">
                                <span className="value p-text fw-bold">Pet Rooming</span>
                                <span className="value p-text fw-bold">80%</span>
                            </div>
                            <div className="skill skill4">
                                <span className="value p-text fw-bold">Pet Rooming</span>
                                <span className="value p-text fw-bold">99%</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="team-achieve">
                        <div className="team team-group">
                            <div className="wrapper-icon">
                                <FontAwesomeIcon icon={faUsers} className="team-achieve-icon" />
                            </div>
                            <div className="team-content">
                                <h2>12k</h2>
                                <p>Happy Client</p>
                            </div>
                        </div>
                        <div className="team team-group">
                            <div className="wrapper-icon2">
                                <FontAwesomeIcon icon={faAward} className="team-achieve-icon" />
                            </div>
                            <div className="team-content">
                                <h2>79+</h2>
                                <p>Nation Award</p>
                            </div>
                        </div>
                        <div className="team team-group">
                            <div className="wrapper-icon" style={{ backgroundColor: '#FEB942' }}>
                                <FontAwesomeIcon icon={faHandshake} className="team-achieve-icon" />
                            </div>
                            <div className="team-content">
                                <h2>2k+</h2>
                                <p>Professional</p>
                            </div>
                        </div>
                        <div className="team team-group">
                            <div className="wrapper-icon4">
                                <FontAwesomeIcon icon={faHandHoldingHeart} className="team-achieve-icon" />
                            </div>
                            <div className="team-content">
                                <h2>12k</h2>
                                <p>Adopted Pet</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default TeamDetail;
