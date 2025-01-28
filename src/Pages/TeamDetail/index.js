import { Col, Container, Row } from 'reactstrap';
import Swiper from '~/components/Swiper';
import './TeamDetail.scss';

import { faFacebook, faPinterest, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAward, faHandHoldingHeart, faHandshake, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SiblingComponent from '~/components/common/SiblingComponent';
import SkillComponent from '~/components/TeamDetail/Skill';
import TeamAchieveItem from '~/components/TeamDetail/TeamAchieveItem';
import TooltipComponent from '~/components/TeamDetail/ToolTip';
import Toastify from '~/components/Toastify';

function TeamDetail() {
    const [isShowFbTooltip, setIsFbShowTooltip] = useState(false);
    const [isTiktokShowTooltip, setIsTiktokShowTooltip] = useState(false);
    const [isTwitterShowTooltip, setIsTwitterShowTooltip] = useState(false);
    const [isPinterestShowTooltip, setIsPinterestShowTooltip] = useState(false);

    const teamData = useSelector((state) => state.teamSlices.value);

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
                            <TooltipComponent
                                url={specificPerson[0].facebook}
                                icon={faFacebook}
                                isShowTooltip={isShowFbTooltip}
                                setShowToolTip={setIsFbShowTooltip}
                            />
                            <TooltipComponent
                                url={specificPerson[0].tiktok}
                                icon={faTiktok}
                                isShowTooltip={isTiktokShowTooltip}
                                setShowToolTip={setIsTiktokShowTooltip}
                            />
                            <TooltipComponent
                                url={specificPerson[0].twitter}
                                icon={faTwitter}
                                isShowTooltip={isTwitterShowTooltip}
                                setShowToolTip={setIsTwitterShowTooltip}
                            />
                            <TooltipComponent
                                url={specificPerson[0].pinterest}
                                icon={faPinterest}
                                isShowTooltip={isPinterestShowTooltip}
                                setShowToolTip={setIsPinterestShowTooltip}
                            />
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
                        <p className="p-text py-4" dangerouslySetInnerHTML={{ __html: specificPerson[0].about }}></p>
                    </div>
                </div>
            </Row>
            <Row className="my-4">
                <Col lg="6">
                    <div className="team-skill">
                        <div className="header-skill">
                            <h4> Personal skill care</h4>
                        </div>
                        <div className="all-skill">
                            <SkillComponent title={'Pet Rooming'} value={85} />
                            <SkillComponent title={'Pet Rooming'} value={75} />
                            <SkillComponent title={'Pet Rooming'} value={80} />
                            <SkillComponent title={'Pet Rooming'} value={99} />
                        </div>
                    </div>
                </Col>
                <Col lg="6" className="pt-3">
                    <div className="team-achieve">
                        <TeamAchieveItem icon={faUsers} heading={'12k'} discription={'Happy Client'} />
                        <TeamAchieveItem
                            icon={faAward}
                            heading={'79+'}
                            discription={'Nation Award'}
                            style={{ backgroundColor: '#82b440' }}
                        />
                        <TeamAchieveItem
                            icon={faHandshake}
                            heading={'2k+'}
                            discription={'Professional'}
                            style={{ backgroundColor: '#FEB942' }}
                        />
                        <TeamAchieveItem
                            icon={faHandHoldingHeart}
                            heading={'12k'}
                            discription={'Adopted Pet'}
                            style={{ backgroundColor: '#27C2EA' }}
                        />
                    </div>
                </Col>
            </Row>
            {/* Swiper */}
            <Row>
                <div className="other-members">
                    <div className="slider-title">
                        <SiblingComponent sibling1={'otherMem'} sibling2={['otherMem']} />
                    </div>
                    <Swiper
                        teamData={teamData}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                    />
                </div>
            </Row>
        </Container>
    );
}

export default TeamDetail;
