import { Container, Col, Row, Label, Input } from 'reactstrap';

import './ServiceDetail.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getTimeUsingService } from '~/service/appServices';

function ServiceDetail() {
    const { t } = useTranslation();
    const [chooseDate, setChooseDate] = useState('');
    const [choosePeriod, setChoosePeriod] = useState(1);
    const [totalPrice, setTotalprice] = useState(0);
    const [timeUsingService, setTimeUsingService] = useState([]);

    const servicesData = useSelector((state) => state.servicesSlices.value);

    const { slug } = useParams();
    const detailService = servicesData.filter((item) => {
        return item.slug.includes(slug);
    });
    useEffect(() => {
        let cost = detailService[0].cost;
        if (choosePeriod === 1 || choosePeriod === 2) {
            setTotalprice(cost);
        } else setTotalprice(+(cost * 2 - cost * 2 * 0.1));
    }, [chooseDate, choosePeriod]);
    useEffect(() => {
        const getPriodTime = async () => {
            const res = await getTimeUsingService();
            if (res) {
                setTimeUsingService(res);
            }
        };
        getPriodTime();
    }, []);
    const handleOnchangeInput = (e) => {
        let name = e.target.name;
        switch (name) {
            case 'chooseDate':
                setChooseDate(e.target.value);
                break;
            case 'choosePeriod':
                const index = e.target.selectedIndex;
                const el = e.target.childNodes[index];
                const option = el.getAttribute('id');
                setChoosePeriod(+option);
                break;
            default:
                throw new Error('Invalid form');
        }
    };

    return (
        <Container className="my-5">
            <Row>
                <Col lg="6" sm="12">
                    <div className="service-avt">
                        <img className="img-fluid" src={detailService[0].icon} alt="img" />
                    </div>
                </Col>
                <Col lg="6" sm="12">
                    <div className="service-infor">
                        <div className="service-name">
                            <h3>{detailService[0].name}</h3>
                            <p className="fw-bold my-0">Animal services</p>
                        </div>
                        <div className="service-content my-3">
                            <p className="p-text">{detailService[0].content}</p>
                        </div>
                        <div className="service-team my-3">
                            <h5>Team</h5>
                            <Link to={`/team/${detailService[0].teamid}`} className="p">
                                {detailService[0].staff_position_name}
                            </Link>
                        </div>
                        <div className="service-cost mt-3">
                            <h5>Cost</h5>
                            <p className='p'>{detailService[0].cost}</p>
                        </div>
                    </div>
                    <div className="register-service">
                        <div className="slider-title">
                            <p>
                                <img className="iconCat" src={'/images/icons8/icons8-cat-footprint-16.png'} alt="img" />
                                <span className="topic1">{t('registerService')}</span>
                            </p>
                        </div>
                        <div className="services-option">
                            <div className="choose-date">
                                <Label>Chọn ngày</Label>
                                <Input
                                    onChange={handleOnchangeInput}
                                    name="chooseDate"
                                    type="date"
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <div className="choose-period">
                                <Label>Chọn buổi</Label>
                                <Input
                                    onChange={handleOnchangeInput}
                                    name="choosePeriod"
                                    type="select"
                                    style={{ width: '100%' }}
                                    className="py-0"
                                >
                                    {timeUsingService.map((item, index) => (
                                        <option key={index} id={item.id}>{item.timeworking} </option>
                                    ))}
                                </Input>
                            </div>
                            <div className="total-cost mt-3">
                                <span>Tổng</span>
                                <span>{totalPrice}</span>
                            </div>
                            <div className='submit-area'>
                                <button className='btn btn-primary'>{t('register')}</button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ServiceDetail;
