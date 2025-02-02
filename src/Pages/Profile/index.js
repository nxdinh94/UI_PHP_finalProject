import './Profile.scss';
import { Col, Container, FormGroup, Input, Label, Row, Table } from 'reactstrap';

import { useEffect, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
    cancelService,
    handleGetRegistedServices,
    handleUpdateProfileApi,
    updateRegistedService,
} from '~/service/userService';

import { toast } from 'react-toastify';
import SiblingComponent from '~/components/common/SiblingComponent';
import CancelServiceButton from '~/components/Profile/CancelServiceButton';
import CountDown from '~/components/Profile/CountDown';
import UpdateServiceButton from '~/components/Profile/UpdateServiceButton';
import Toastify from '~/components/Toastify';
import { getTimeUsingService } from '~/service/appServices';
import getUserData from '~/utils/getUserData';

function reducer(state, action) {
    if (action.type === 'change_name') {
        return { ...state, name: action.payload };
    } else if (action.type === 'change_address') {
        return { ...state, address: action.payload };
    } else if (action.type === 'change_email') {
        return { ...state, email: action.payload };
    } else if (action.type === 'change_phone') {
        return { ...state, phone: action.payload };
    } else if (action.type === 'change_dob') {
        return { ...state, dob: action.payload };
    } else if (action.type === 'change_pinterest') {
        return { ...state, pinterest: action.payload };
    } else if (action.type === 'change_linkedin') {
        return { ...state, linkedin: action.payload };
    } else if (action.type === 'change_twitter') {
        return { ...state, twitter: action.payload };
    } else if (action.type === 'change_facebook') {
        return { ...state, facebook: action.payload };
    } else if (action.type === 'change_about') {
        return { ...state, aboutContent: action.payload };
    } else if (action.type === 'change_delivery_address') {
        return { ...state, deliveryAddress: action.payload };
    } else if (action.type === 'change_date_using_service') {
        return { ...state, changeDateUsingService: action.payload };
    } else if (action.type === 'change_period_using_service') {
        return { ...state, changePeriod: action.payload };
    }
}
export default function Profile() {
    const userData = getUserData();
    const userId = userData.id;

    const [t] = useTranslation();

    const [isOnChangeDate, setIsOnChangeDate] = useState(false);
    const [isOnChangePeriodDay, setIsOnChangePeriodDay] = useState(false);
    const [timeUsingServiceAPI, setTimeUsingServiceAPI] = useState([]);
    const [isPreviewMode, setIsPreviewMode] = useState(true);
    const [listRegistedServces, setListRegistedServces] = useState([]);

    let initialState = {
        name: userData.fullname,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
        dob: userData.dob,
        pinterest: userData.contact_pinterest,
        linkedin: userData.contact_linkedin,
        twitter: userData.contact_twitter,
        facebook: userData.contact_facebook,
        aboutContent: userData.about_content,
        deliveryAddress: userData.delivery_address,
        changeDateUsingService: '',
        changePeriod: 1,
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleOnChangeInput = (e) => {
        let inputName = e.target.name;
        switch (inputName) {
            case 'fullname':
                dispatch({ type: 'change_name', payload: e.target.value });
                break;
            case 'address':
                dispatch({ type: 'change_address', payload: e.target.value });
                break;
            case 'phone':
                dispatch({ type: 'change_phone', payload: e.target.value });
                break;
            case 'dob':
                dispatch({ type: 'change_dob', payload: e.target.value });
                break;
            case 'pinterest':
                dispatch({ type: 'change_pinterest', payload: e.target.value });
                break;
            case 'linkedin':
                dispatch({ type: 'change_linkedin', payload: e.target.value });
                break;
            case 'twitter':
                dispatch({ type: 'change_twitter', payload: e.target.value });
                break;
            case 'facebook':
                dispatch({ type: 'change_facebook', payload: e.target.value });
                break;
            case 'about':
                dispatch({ type: 'change_about', payload: e.target.value });
                break;
            case 'changeDateUsingService':
                setIsOnChangeDate(true);
                dispatch({ type: 'change_date_using_service', payload: e.target.value });
                break;
            case 'deliveryAddress':
                dispatch({ type: 'change_delivery_address', payload: e.target.value });
                break;
            case 'changingPeriod':
                setIsOnChangePeriodDay(true);
                const index = e.target.selectedIndex;
                const el = e.target.childNodes[index];
                const option = el.getAttribute('id');
                dispatch({ type: 'change_period_using_service', payload: +option });
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
                email: state.email,
                fullname: state.name,
                address: state.address,
                phone: state.phone,
                dob: state.dob,
                pinterest: state.pinterest,
                linkedin: state.linkedin,
                twitter: state.twitter,
                facebook: state.facebook,
                aboutContent: state.aboutContent,
                deliveryAddress: state.deliveryAddress,
            });
            // console.log(res);
            if (res.status) {
                sessionStorage.setItem('user_data', JSON.stringify(res.user_data));
                toast.success(res.message);
            } else toast.error('Thay đổi không thành công');
            // Update new in4 into sessionStorage
            setIsPreviewMode(!isPreviewMode);
        }
    };

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
            onhHandleGetRegistedServices();
        } else toast.error(res.message);
        const newShowDiv = [...isShowAnounce];
        newShowDiv[key] = !newShowDiv[key];
        setIsShowAnounce(newShowDiv);
    };

    //jfdfd
    const onhHandleGetRegistedServices = async () => {
        const res = await handleGetRegistedServices(userId);
        setListRegistedServces(res);
    };
    const [isShowAnounce, setIsShowAnounce] = useState(Array(100).fill(true));

    useEffect(() => {
        const getPriodTime = async () => {
            const res = await getTimeUsingService();
            if (res) {
                setTimeUsingServiceAPI(res);
            }
        };
        onhHandleGetRegistedServices();
        getPriodTime();
    }, []);

    // console.log('Select', listRegistedServces);
    const handleCancelService = async (userid, serviceid) => {
        const res = await cancelService(userid, serviceid);

        onhHandleGetRegistedServices();
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
                                            value={state.name}
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
                                            value={state.email}
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
                                            value={state.address}
                                            disabled={isPreviewMode}
                                        />
                                    </Col>
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup row>
                                    <Label for="phone" size="md" sm={2} style={{ paddingTop: 20 }}>
                                        Điện thoại
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            bsSize="md"
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            disabled={isPreviewMode}
                                            onChange={handleOnChangeInput}
                                            value={state.phone}
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
                                            value={state.dob}
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
                                            value={state.pinterest}
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
                                            value={state.linkedin}
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
                                            value={state.twitter}
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
                                            value={state.facebook}
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
                                            value={state.aboutContent}
                                            disabled={isPreviewMode}
                                            style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                        />
                                    </Col>
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup row>
                                    <Label for="deliveryAddress" size="md" sm={2} style={{ paddingTop: 20 }}>
                                        Delivery Address
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            bsSize="md"
                                            id="deliveryAddress"
                                            name="deliveryAddress"
                                            type="textarea"
                                            onChange={handleOnChangeInput}
                                            value={state.deliveryAddress}
                                            disabled={isPreviewMode}
                                            style={{
                                                marginBottom: 10,
                                                padding: '0px, 0px, 0px, 5px',
                                                height: '100px',
                                            }}
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
                    <div className="registed-services-wrapper">
                        <div className="slider-title">
                            <SiblingComponent sibling1={'registedService'} sibling2={['registedService']} />
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
                                                        {/* Cancel Service Button */}
                                                        <CancelServiceButton
                                                            userId={userId}
                                                            serviceId={listRegistedServce.serviceid}
                                                            onHandleCancelService={handleCancelService}
                                                        />
                                                        {isShowAnounce[key] ? (
                                                            <UpdateServiceButton
                                                                myKey={key}
                                                                onHandleUpdateServiceBtn={handleUpdateServiceBtn}
                                                            />
                                                        ) : (
                                                            <div className="services-option">
                                                                <div className="choose-date">
                                                                    <Label>Chọn ngày</Label>
                                                                    <Input
                                                                        onChange={handleOnChangeInput}
                                                                        name="changeDateUsingService"
                                                                        type="date"
                                                                        value={
                                                                            isOnChangeDate
                                                                                ? state.changeDateUsingService
                                                                                : listRegistedServce.register_day
                                                                        }
                                                                        style={{ width: '100%' }}
                                                                    />
                                                                </div>
                                                                <div className="choose-period">
                                                                    <Label>Chọn buổi</Label>
                                                                    <Input
                                                                        onChange={handleOnChangeInput}
                                                                        name="changingPeriod"
                                                                        type="select"
                                                                        style={{ width: '100%' }}
                                                                        className="py-0"
                                                                    >
                                                                        {timeUsingServiceAPI.map((item, index) => (
                                                                            <option
                                                                                key={index}
                                                                                value={
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
                                                                                    ? state.changeDateUsingService
                                                                                    : listRegistedServce.register_day,
                                                                                isOnChangePeriodDay
                                                                                    ? state.changePeriod
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
