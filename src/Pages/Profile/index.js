import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Input, Label, FormGroup, Table } from 'reactstrap';

import './Profile.scss';
import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { handleUpdateProfileApi, handleGetRegistedServices } from '~/service/userService';

import { Link } from 'react-router-dom';
import { getTimeUsingService } from '~/service/appServices';

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

    useEffect(() => {
        const handle = async () => {
            const res = await handleGetRegistedServices(userId);
            setListRegistedServces(res);
        };
        handle();
    }, []);
    // console.log('list registed ', listRegistedServces);
    const [isShowAnounce, setIsShowAnounce] = useState(Array(100).fill(true));

    const handleUpdateServiceBtn = (key) => {
        const newShowDiv = [...isShowAnounce];
        newShowDiv[key] = !newShowDiv[key];
        setIsShowAnounce(newShowDiv);
    };
    const handleSaveServiceBtn = (key) => {
        const newShowDiv = [...isShowAnounce];
        newShowDiv[key] = !newShowDiv[key];
        setIsShowAnounce(newShowDiv);
    };

    //jfdfd

    const [chooseDate, setChooseDate] = useState('');
    const [isOnChangeDate, setIsOnChangeDate] = useState(false);
    const [choosePeriod, setChoosePeriod] = useState(1);
    const [timeUsingServiceAPI, setTimeUsingServiceAPI] = useState([]);
    console.log('dfd', chooseDate, choosePeriod);
    useEffect(() => {
        const getPriodTime = async () => {
            const res = await getTimeUsingService();
            if (res) {
                setTimeUsingServiceAPI(res);
            }
        };
        getPriodTime();
    }, []);
    const handleOnchangeInput = (e) => {
        let name = e.target.name;
        switch (name) {
            case 'chooseDate':
                setIsOnChangeDate(true);
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
        <Container className="profile-container">
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
            <Row>
                <div className="registed-services-wrapper">
                    <div className="slider-title">
                        <p>
                            <img className="iconCat" src={'/images/icons8/icons8-cat-footprint-16.png'} />
                            <span className="topic1">{t('registedService')}</span>
                        </p>
                        <h2 className="topic2">{t('registedService')}</h2>
                    </div>
                    <div className="registed-item">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th className="fw-bold">STT</th>
                                    <th className="fw-bold">Tên dịch vụ</th>
                                    <th className="fw-bold">Ngày đăng ký</th>
                                    <th className="fw-bold">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listRegistedServces.map((listRegistedServce, key) => (
                                    <tr key={key}>
                                        <th scope="row">{listRegistedServce.id}</th>
                                        <td>{listRegistedServce.name}</td>
                                        <td>{listRegistedServce.register_day}</td>
                                        {listRegistedServce.status == 1 ? (
                                            <td>
                                                <Link
                                                    to={`/services/${listRegistedServce.slug}/detail`}
                                                    className="btn btn-success text-white"
                                                >
                                                    Xem chi tiết
                                                </Link>
                                                <button className="btn btn-danger mx-2">Hủy dịch vụ</button>
                                            </td>
                                        ) : (
                                            <td>
                                                <Link
                                                    to={`/services/${listRegistedServce.slug}/detail`}
                                                    className="btn btn-default"
                                                    style={{ pointerEvents: 'none', border: '1px solid black' }}
                                                >
                                                    Xem chi tiết
                                                </Link>
                                                <button className="btn btn-danger mx-2">Hủy dịch vụ</button>
                                                {isShowAnounce[key] ? (
                                                    <button
                                                        onClick={() => {
                                                            handleUpdateServiceBtn(key);
                                                        }}
                                                        className="btn btn-primary me-2"
                                                    >
                                                        Sửa dịch vụ
                                                    </button>
                                                ) : (
                                                    <div className="services-option">
                                                        <div className="choose-date">
                                                            <Label>Chọn ngày</Label>
                                                            <Input
                                                                onChange={handleOnchangeInput}
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
                                                                onChange={handleOnchangeInput}
                                                                name="choosePeriod"
                                                                type="select"
                                                                style={{ width: '100%' }}
                                                                className="py-0"
                                                            >
                                                                {timeUsingServiceAPI.map((item, index) => (
                                                                    <option
                                                                        key={index}
                                                                        selected={
                                                                            item.id == listRegistedServce.periodTime
                                                                        }
                                                                        id={item.id}
                                                                    >
                                                                        {item.timeworking}{' '}
                                                                    </option>
                                                                ))}
                                                            </Input>
                                                        </div>
                                                        <div className="submit-area">
                                                            <button
                                                                onClick={() => {
                                                                    handleSaveServiceBtn(key);
                                                                }}
                                                                className="btn btn-primary"
                                                            >
                                                                {t('save')}
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                                {isShowAnounce[key] && (
                                                    <span className="anounce">
                                                        Yêu cầu đang được hệ thống xác nhận!!!
                                                    </span>
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
        </Container>
    );
}

export default Profile;
