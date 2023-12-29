import { faCircleInfo, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip as Tooltip2 } from 'react-tippy';
import { Col, Container, FormGroup, Input, Label, Row, Table } from 'reactstrap';

import { useEffect, useState } from 'react';
import './Profile.scss';

import OrderStatus from '~/components/PurchaseOrder';

import { useTranslation } from 'react-i18next';

import {
    cancelService,
    handleGetRegistedServices,
    handleUpdateProfileApi,
    updateRegistedService,
} from '~/service/userService';

import { toast } from 'react-toastify';
import Toastify from '~/components/Toastify';
import { getTimeUsingService } from '~/service/appServices';

import CountDown from '~/components/CountDown';

function Profile() {
    const [isPreviewMode, setIsPreviewMode] = useState(true);
    const [listRegistedServces, setListRegistedServces] = useState([]);

    const userData = JSON.parse(sessionStorage.getItem('user_data'));
    const userId = userData.id;
    const email = userData.email;
    const [fullname, setFullname] = useState(userData.fullname);
    const [address, setAddress] = useState(userData.address);
    const [phone, setPhone] = useState(userData.phone);
    const [dob, setDob] = useState(userData.dob);
    const [pinterest, setPinterest] = useState(userData.contact_pinterest);
    const [linkedin, setLinkedin] = useState(userData.contact_linkedin);
    const [twitter, setTwitter] = useState(userData.contact_twitter);
    const [facebook, setFacebook] = useState(userData.contact_facebook);
    const [aboutContent, setAboutContent] = useState(userData.about_content);

    const handleOnChangeInput = (e) => {
        let inputName = e.target.name;
        switch (inputName) {
            case 'fullname':
                setFullname(e.target.value);
                break;
            case 'address':
                setAddress(e.target.value);
                break;
            case 'phone':
                setPhone(e.target.value);
                break;
            case 'dob':
                setDob(e.target.value);
                break;
            case 'pinterest':
                setPinterest(e.target.value);
                break;
            case 'linkedin':
                setLinkedin(e.target.value);
                break;
            case 'twitter':
                setTwitter(e.target.value);
                break;
            case 'facebook':
                setFacebook(e.target.value);
                break;
            case 'about':
                setAboutContent(e.target.value);
                break;
            case 'chooseDate':
                setIsOnChangeDate(true);
                setChooseDate(e.target.value);
                break;
            case 'choosePeriod':
                setIsOnChangePeriodDay(true);
                const index = e.target.selectedIndex;
                const el = e.target.childNodes[index];
                const option = el.getAttribute('id');
                setChoosePeriod(+option);
                break;
            default:
                throw new Error('Invalid form');
        }
    };

    const handleMode = async () => {
        if (isPreviewMode) {
            setIsPreviewMode(!isPreviewMode);
        } else {
            //code
            const res = await handleUpdateProfileApi({
                userId,
                email,
                fullname,
                address,
                phone,
                dob,
                pinterest,
                linkedin,
                twitter,
                facebook,
                aboutContent,
            });
            // Update new in4 into sessionStorage
            sessionStorage.setItem('user_data', JSON.stringify(res.user_data));

            setIsPreviewMode(!isPreviewMode);
        }
    };

    const [t] = useTranslation();
    const handle = async () => {
        const res = await handleGetRegistedServices(userId);
        setListRegistedServces(res);
    };
    useEffect(() => {
        handle();
    }, []);
    const [isShowAnounce, setIsShowAnounce] = useState(Array(100).fill(true));

    const handleUpdateServiceBtn = (key) => {
        const newShowDiv = [...isShowAnounce];
        newShowDiv[key] = !newShowDiv[key];
        setIsShowAnounce(newShowDiv);
    };
    const handleSaveServiceBtn = async (key, userId, serviceId, usingDate, periodTime) => {
        // console.log('dfd', userId, serviceId, periodTime, usingDate);
        const res = await updateRegistedService(userId, serviceId, usingDate, periodTime);
        if (res.status) {
            toast.success(res.message);
            handle();
        } else toast.error(res.message);
        const newShowDiv = [...isShowAnounce];
        newShowDiv[key] = !newShowDiv[key];
        setIsShowAnounce(newShowDiv);
    };

    //jfdfd

    const [chooseDate, setChooseDate] = useState('');
    const [choosePeriod, setChoosePeriod] = useState(1);
    const [isOnChangeDate, setIsOnChangeDate] = useState(false);
    const [isOnChangePeriodDay, setIsOnChangePeriodDay] = useState(false);
    const [timeUsingServiceAPI, setTimeUsingServiceAPI] = useState([]);
    const [isShowTooltip, setIsShowTooltip] = useState(false);
    // console.log('dfd', chooseDate, choosePeriod);

    useEffect(() => {
        const getPriodTime = async () => {
            const res = await getTimeUsingService();
            if (res) {
                setTimeUsingServiceAPI(res);
            }
        };
        getPriodTime();
    }, []);

    // console.log('Select', listRegistedServces);
    const handleCancelService = async (userid, serviceid) => {
        const res = await cancelService(userid, serviceid);

        handle();
        if (res.status) {
            toast.success(res.message);
        } else toast.error(res.message);
    };

    return (
        <Container className="profile-container">
            <Toastify />
            <Row className="profile-row">
                <Col className="profile-col">
                    <div className="content">
                        <div className="avt-container">
                            <div className="avt-wrapper">
                                <img src={userData.thumbnail} />
                            </div>
                        </div>
                        <div className="profile-info">
                            <Row>
                                <FormGroup row>
                                    <Label for="fullname" size="md" sm={2} style={{ paddingTop: 20 }}>
                                        Họ và tên
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            bsSize="md"
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            value={fullname}
                                            onChange={handleOnChangeInput}
                                            disabled={isPreviewMode}
                                            style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                        />
                                    </Col>
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup row>
                                    <Label for="email" size="md" sm={2} style={{ paddingTop: 20 }}>
                                        Email
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            bsSize="md"
                                            id="email"
                                            name="email"
                                            type="text"
                                            onChange={handleOnChangeInput}
                                            value={email}
                                            style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                            disabled
                                        />
                                    </Col>
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup row>
                                    <Label for="address" size="md" sm={2} style={{ paddingTop: 20 }}>
                                        Địa chỉ
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            bsSize="md"
                                            id="address"
                                            name="address"
                                            onChange={handleOnChangeInput}
                                            type="text"
                                            value={address}
                                            disabled={isPreviewMode}
                                        />
                                    </Col>
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup row>
                                    <Label for="phonenumber" size="md" sm={2} style={{ paddingTop: 20 }}>
                                        Điện thoại
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            bsSize="md"
                                            id="phonenumber"
                                            name="phonenumber"
                                            type="text"
                                            disabled={isPreviewMode}
                                            onChange={handleOnChangeInput}
                                            value={phone}
                                            style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                        />
                                    </Col>
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup row>
                                    <Label for="dob" size="md" sm={2} style={{ paddingTop: 20 }}>
                                        Ngày sinh
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            type="date"
                                            bsSize="md"
                                            id="dob"
                                            name="dob"
                                            onChange={handleOnChangeInput}
                                            value={dob}
                                            disabled={isPreviewMode}
                                            style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                        />
                                    </Col>
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup row>
                                    <Label for="pinterest" size="md" sm={2} style={{ paddingTop: 20 }}>
                                        Pinterest
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            bsSize="md"
                                            id="pinterest"
                                            name="pinterest"
                                            type="text"
                                            disabled={isPreviewMode}
                                            onChange={handleOnChangeInput}
                                            value={pinterest}
                                            style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                        />
                                    </Col>
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup row>
                                    <Label for="linked" size="md" sm={2} style={{ paddingTop: 20 }}>
                                        Linked
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            bsSize="md"
                                            id="linked"
                                            name="linkedin"
                                            type="text"
                                            onChange={handleOnChangeInput}
                                            value={linkedin}
                                            disabled={isPreviewMode}
                                            style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                        />
                                    </Col>
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup row>
                                    <Label for="twitter" size="md" sm={2} style={{ paddingTop: 20 }}>
                                        Twitter
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            bsSize="md"
                                            id="twitter"
                                            name="twitter"
                                            type="text"
                                            onChange={handleOnChangeInput}
                                            value={twitter}
                                            disabled={isPreviewMode}
                                            style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                        />
                                    </Col>
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup row>
                                    <Label for="Facebook" size="md" sm={2} style={{ paddingTop: 20 }}>
                                        Facebook
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            bsSize="md"
                                            id="Facebook"
                                            name="facebook"
                                            type="text"
                                            onChange={handleOnChangeInput}
                                            value={facebook}
                                            disabled={isPreviewMode}
                                            style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                        />
                                    </Col>
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup row>
                                    <Label for="about" size="md" sm={2} style={{ paddingTop: 20 }}>
                                        Tiểu sử
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            bsSize="md"
                                            id="about"
                                            name="about"
                                            type="text"
                                            onChange={handleOnChangeInput}
                                            value={aboutContent}
                                            disabled={isPreviewMode}
                                            style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                        />
                                    </Col>
                                </FormGroup>
                            </Row>
                            <Row>
                                <div className="button-wrapper">
                                    <button
                                        onClick={() => handleMode()}
                                        className={isPreviewMode ? 'btn btn-primary' : 'btn btn-success'}
                                    >
                                        {isPreviewMode ? 'Chỉnh sửa' : 'Lưu'}
                                    </button>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>

            {listRegistedServces.data ? (
                <Row>
                    <div className="content"></div>
                    <div className="registed-services-wrapper">
                        <div className="slider-title">
                            <p>
                                <img className="iconCat" src={'/images/icons8/icons8-cat-footprint-16.png'} />
                                <span className="topic1">{t('registedService')}</span>
                            </p>
                            <h2 className="topic2">{t('registedService')}</h2>
                        </div>
                        <div className="registed-item">
                            <Table responsive bordered>
                                <thead>
                                    <tr>
                                        <th className="fw-bold">Tên dịch vụ</th>
                                        <th className="fw-bold">Ngày đăng ký</th>
                                        <th className="fw-bold">Buổi</th>
                                        <th className="fw-bold">Thời gian còn lại</th>
                                        <th className="fw-bold">Thanh toán</th>
                                        <th className="fw-bold">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listRegistedServces.status &&
                                        listRegistedServces.data.map((listRegistedServce, key) => (
                                            <tr key={key}>
                                                <td>
                                                    <a href={`/services/${listRegistedServce.slug}/detail`}>
                                                        {listRegistedServce.name}
                                                    </a>
                                                </td>
                                                <td>{listRegistedServce.register_day}</td>
                                                <td>
                                                    {listRegistedServce.periodTime === 1 ? '7h-11h' : ''}
                                                    {listRegistedServce.periodTime === 2 ? '13h-17h' : ''}
                                                    {listRegistedServce.periodTime === 3 ? 'Cả ngày' : ''}
                                                </td>
                                                <td>
                                                    <CountDown
                                                        periodTime={listRegistedServce.periodTime}
                                                        registerDate={listRegistedServce.register_day}
                                                    />
                                                </td>
                                                <td>
                                                    {listRegistedServce.payment_status === 0
                                                        ? 'Chưa thanh toán'
                                                        : 'Đã thanh toán'}
                                                </td>
                                                {listRegistedServce.status == 1 ? (
                                                    <td></td>
                                                ) : (
                                                    <td>
                                                        <button
                                                            className="btn btn-danger mx-2"
                                                            onClick={() =>
                                                                handleCancelService(
                                                                    userId,
                                                                    listRegistedServce.serviceid,
                                                                )
                                                            }
                                                        >
                                                            <FontAwesomeIcon icon={faXmark} className="profile-icon" />
                                                        </button>
                                                        {isShowAnounce[key] ? (
                                                            <button
                                                                onClick={() => {
                                                                    handleUpdateServiceBtn(key);
                                                                }}
                                                                className="btn btn-primary me-2"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={faPenToSquare}
                                                                    className="profile-icon"
                                                                />
                                                            </button>
                                                        ) : (
                                                            <div className="services-option">
                                                                <div className="choose-date">
                                                                    <Label>Chọn ngày</Label>
                                                                    <Input
                                                                        onChange={handleOnChangeInput}
                                                                        name="chooseDate"
                                                                        type="date"
                                                                        value={
                                                                            isOnChangeDate
                                                                                ? chooseDate
                                                                                : listRegistedServce.register_day
                                                                        }
                                                                        style={{ width: '100%' }}
                                                                    />
                                                                </div>
                                                                <div className="choose-period">
                                                                    <Label>Chọn buổi</Label>
                                                                    <Input
                                                                        onChange={handleOnChangeInput}
                                                                        name="choosePeriod"
                                                                        type="select"
                                                                        style={{ width: '100%' }}
                                                                        className="py-0"
                                                                    >
                                                                        {timeUsingServiceAPI.map((item, index) => (
                                                                            <option
                                                                                key={index}
                                                                                selected={
                                                                                    item.id ==
                                                                                    listRegistedServce.periodTime
                                                                                }
                                                                                id={item.id}
                                                                            >
                                                                                {item.timeworking}
                                                                            </option>
                                                                        ))}
                                                                    </Input>
                                                                </div>
                                                                <div className="submit-area">
                                                                    <button
                                                                        onClick={() => {
                                                                            handleSaveServiceBtn(
                                                                                key,
                                                                                userId,
                                                                                listRegistedServce.serviceid,
                                                                                isOnChangeDate
                                                                                    ? chooseDate
                                                                                    : listRegistedServce.register_day,
                                                                                isOnChangePeriodDay
                                                                                    ? choosePeriod
                                                                                    : listRegistedServce.periodTime,
                                                                            );
                                                                        }}
                                                                        className="btn btn-primary"
                                                                    >
                                                                        {t('save')}
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                        ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Row>
            ) : (
                ''
            )}
        </Container>
    );
}

export default Profile;
