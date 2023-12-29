import './EditQLDV.scss';
import { Col, Container, FormGroup, Input, Label, Row, Table } from 'reactstrap';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import Toastify from '~/components/Toastify';
import { handleAddService } from '~/service/adminService';

function AddQLDV() {
    const [serviceName, setServiceName] = useState('');
    const [newSlug, setNewSlug] = useState('');
    const [thumpnail2, setThumpnail2] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [price, setPrice] = useState('');
    const [teamid, setTeamid] = useState('');

    const handleOnChangeInput = (e) => {
        let inputName = e.target.name;
        switch (inputName) {
            case 'serviceName':
                setServiceName(e.target.value);
                break;
            case 'newSlug':
                setNewSlug(e.target.value);
                break;
            case 'thumpnail2':
                const requiredPartName = '/images/services/';
                let path = e.target.value;
                let arrayPath = path.split('\\');
                let nameImage = arrayPath[arrayPath.length - 1];
                setThumpnail2(requiredPartName.concat(nameImage));
                break;
            case 'description':
                setDescription(e.target.value);
                break;
            case 'content':
                setContent(e.target.value);
                break;
            case 'price':
                setPrice(e.target.value);
                break;
            case 'teamid':
                setTeamid(e.target.value);
                break;

            default:
                throw new Error('Invalid form');
        }
    };

    const handleMode = async () => {
        const res = await handleAddService({
            serviceName,
            newSlug,
            thumpnail2,
            description,
            content,
            price,
            teamid,
        });
        console.log(res);
        if (res.status) {
            toast.success(res.message);
        } else toast.error(res.errors);
    };
    return (
        <div className="content">
            <Toastify />
            <div className="div-title">
                <p className="my-0"> Thêm dịch vụ</p>
            </div>
            <div className="profile-container">
                <Toastify />
                <Row className="profile-row">
                    <Col className="profile-col">
                        <div className="content">
                            <div className="avt-container">
                                <div className="avt-wrapper">
                                    <img src={thumpnail2} />
                                </div>
                            </div>
                            <div className="profile-info">
                                <Row>
                                    <FormGroup row>
                                        <Label for="serviceName" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Tên dịch vụ
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="serviceName"
                                                name="serviceName"
                                                type="text"
                                                onChange={handleOnChangeInput}
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
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup row>
                                        <Label for="thumpnail2" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Thumbnail
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="thumpnail2"
                                                name="thumpnail2"
                                                onChange={handleOnChangeInput}
                                                type="file"
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup row>
                                        <Label for="description" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Mô tả
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="textarea"
                                                id="description"
                                                name="description"
                                                onChange={handleOnChangeInput}
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px', height: 150 }}
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
                                                bsSize="md"
                                                id="content"
                                                name="content"
                                                type="textarea"
                                                onChange={handleOnChangeInput}
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>

                                <Row>
                                    <FormGroup row>
                                        <Label for="price" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Giá
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="price"
                                                name="price"
                                                type="number"
                                                onChange={handleOnChangeInput}
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
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>

                                <Row>
                                    <div className="button-wrapper">
                                        <button onClick={() => handleMode()} className="btn btn-success">
                                            Lưu
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

export default AddQLDV;
