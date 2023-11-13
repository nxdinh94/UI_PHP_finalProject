import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Input, Label, FormGroup } from 'reactstrap';

import './Profile.scss';
import { useState } from 'react';

function Profile() {
    const [isPreviewMode, setIsPreviewMode] = useState(true);
    const handleMode = () => {
        if (isPreviewMode) {
            setIsPreviewMode(!isPreviewMode);
        } else {
            //code

            setIsPreviewMode(!isPreviewMode);
        }
    };
    const userData = JSON.parse(sessionStorage.getItem('user_data'));

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
                                            value={userData.fullname}
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
                                            value={userData.email}
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
                                            type="text"
                                            value={userData.address}
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
                                            type="number"
                                            disabled={isPreviewMode}
                                            value={userData.phone}
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
                                            value={userData.dob}
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
                                            value={userData.contact_pinterest}
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
                                            name="linked"
                                            type="text"
                                            value={userData.contact_linkedin}
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
                                            value={userData.contact_twitter}
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
                                            name="Facebook"
                                            type="text"
                                            value={userData.contact_facebook}
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
                                            value={userData.about_content}
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
        </Container>
    );
}

export default Profile;
