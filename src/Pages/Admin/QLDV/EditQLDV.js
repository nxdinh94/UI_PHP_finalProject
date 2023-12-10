import './EditQLDV.scss';
import { Col, Container, FormGroup, Input, Label, Row, Table } from 'reactstrap';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import Toastify from '~/components/Toastify';
function EditQLDV() {
    const [isPreviewMode, setIsPreviewMode] = useState(true);

    const allServices = useSelector((state) => state.servicesSlices.value);
    const { slug } = useParams();
    const specificService = allServices.filter((item) => {
        return slug.includes(item.slug);
    });

    const userData = JSON.parse(sessionStorage.getItem('user_data'));
    const userId = userData.id;

    const [name, setName] = useState(specificService[0].name);
    const [newSlug, setNewSlug] = useState(specificService[0].slug);
    const [icon, setIcon] = useState(specificService[0].icon);
    const [descr, setDescr] = useState(specificService[0].dersc);
    const [content, setContent] = useState(specificService[0].content);
    const [cost, setCost] = useState(specificService[0].cost);
    const [teamid, setTeamId] = useState(specificService[0].teamid);

    const handleOnChangeInput = (e) => {
        let inputName = e.target.name;
        switch (inputName) {
            case 'name':
                setName(e.target.value);
                break;
            case 'newSlug':
                setNewSlug(e.target.value);
                break;
            case 'icon':
                setIcon(e.target.value);
                break;
            case 'descr':
                setDescr(e.target.value);
                break;
            case 'content':
                setContent(e.target.value);
                break;
            case 'cost':
                setCost(e.target.value);
                break;
            case 'teamid':
                setTeamId(e.target.value);
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
            // const res = await handleUpdateProfileApi({
            //     userId,
            //     email,
            //     fullname,
            //     address,
            //     phone,
            //     dob,
            //     pinterest,
            //     linkedin,
            //     twitter,
            //     facebook,
            //     aboutContent,
            // });
            // Update new in4 into sessionStorage
            // sessionStorage.setItem('user_data', JSON.stringify(res.user_data));

            setIsPreviewMode(!isPreviewMode);
        }
    };
    return ( 
        <div className="content">
            <Toastify />
            <div className="div-title">
                <p className="my-0"> Database Dich vu</p>
            </div>
            <div className="profile-container">
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
                                        <Label for="name" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Tên dịch vụ
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={name}
                                                onChange={handleOnChangeInput}
                                                disabled={isPreviewMode}
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup row>
                                        <Label for="newSlug" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Slug
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="newSlug"
                                                name="newSlug"
                                                type="text"
                                                onChange={handleOnChangeInput}
                                                value={newSlug}
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                                disabled
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup row>
                                        <Label for="icon" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Icon
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="icon"
                                                name="icon"
                                                onChange={handleOnChangeInput}
                                                type="text"
                                                value={icon}
                                                disabled={isPreviewMode}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup row>
                                        <Label for="descr" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Mô tả
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="descr"
                                                name="descr"
                                                type="text"
                                                disabled={isPreviewMode}
                                                onChange={handleOnChangeInput}
                                                value={descr}
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup row>
                                        <Label for="content" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Nội dung
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="textarea"
                                                id="content"
                                                name="content"
                                                onChange={handleOnChangeInput}
                                                value={content}
                                                disabled={isPreviewMode}
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px', height: 150 }}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup row>
                                        <Label for="cost" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Cost
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="cost"
                                                name="cost"
                                                type="text"
                                                disabled={isPreviewMode}
                                                onChange={handleOnChangeInput}
                                                value={cost}
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup row>
                                        <Label for="teamid" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Team
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="teamid"
                                                name="teamid"
                                                type="text"
                                                onChange={handleOnChangeInput}
                                                value={teamid}
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
            </div>
        </div>
    );
}

export default EditQLDV;
