import './EditQLSP.scss';
import { Col, Container, FormGroup, Input, Label, Row, Table } from 'reactstrap';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import Toastify from '~/components/Toastify';
import { handleAddProduct } from '~/service/adminService';

function AddQLSP() {
    const [product_name, setProduct_name] = useState('');
    const [newSlug, setNewSlug] = useState('');
    const [thumpnail2, setThumpnail2] = useState('');
    const [description, setDescription] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [price, setPrice] = useState('');
    const [dimensions, setDimensions] = useState('');
    const [color, setColor] = useState('');
    const [origin, setOrigin] = useState('');
    const [product_status, setProduct_status] = useState('');
    const [promotionid, setPromotionid] = useState('');
    const [quantity, setQuantity] = useState('');
    const [evaluate_quantity, setEvaluate_quantity] = useState(0);
    const [evaluate_star, setEvaluate_star] = useState(0);
    const handleOnChangeInput = (e) => {
        let inputName = e.target.name;
        switch (inputName) {
            case 'product_name':
                setProduct_name(e.target.value);
                break;
            case 'newSlug':
                setNewSlug(e.target.value);
                break;
            case 'thumpnail2':
                const requiredPartName = '/images/product/';
                let path = e.target.value;
                let arrayPath = path.split('\\');
                let nameImage = arrayPath[arrayPath.length - 1];
                setThumpnail2(requiredPartName.concat(nameImage));
                break;
            case 'description':
                setDescription(e.target.value);
                break;
            case 'ingredient':
                setIngredient(e.target.value);
                break;
            case 'price':
                setPrice(e.target.value);
                break;
            case 'dimensions':
                setDimensions(e.target.value);
                break;
            case 'color':
                setColor(e.target.value);
                break;
            case 'origin':
                setOrigin(e.target.value);
                break;
            case 'product_status':
                setProduct_status(e.target.value);
                break;
            // case 'promotionid':
            //     setPromotionid(e.target.value);
            //     break;
            case 'quantity':
                setQuantity(e.target.value);
                break;

            default:
                throw new Error('Invalid form');
        }
    };

    const handleMode = async () => {
        const res = await handleAddProduct({
            product_name,
            newSlug,
            thumpnail2,
            description,
            ingredient,
            price,
            dimensions,
            color,
            origin,
            product_status,
            // promotionid,
            quantity,
            evaluate_quantity,
            evaluate_star,
        });
        if (res.status) {
            toast.success(res.message);
        } else toast.error(res.errors.product_name);
        console.log(res);
    };
    return (
        <div className="content">
            <Toastify />
            <div className="div-title">
                <p className="my-0"> Thêm sản phẩm</p>
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
                                        <Label for="product_name" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Tên sản phẩm
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="product_name"
                                                name="product_name"
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
                                        <Label for="ingredient" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Thành Phần
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="ingredient"
                                                name="ingredient"
                                                type="textarea"
                                                onChange={handleOnChangeInput}
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
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
                                        <Label for="dimensions" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Kích thước
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="dimensions"
                                                name="dimensions"
                                                type="text"
                                                onChange={handleOnChangeInput}
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup row>
                                        <Label for="color" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Màu sắc
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="color"
                                                name="color"
                                                type="text"
                                                onChange={handleOnChangeInput}
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup row>
                                        <Label for="origin" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Xuất sứ
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="origin"
                                                name="origin"
                                                type="text"
                                                onChange={handleOnChangeInput}
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup row>
                                        <Label for="product_status" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Trạng thái
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="product_status"
                                                name="product_status"
                                                type="number"
                                                onChange={handleOnChangeInput}
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup row>
                                        <Label for="promotionid" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Loại khuyến mãi
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="promotionid"
                                                name="promotionid"
                                                type="text"
                                                disabled
                                                onChange={handleOnChangeInput}
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup row>
                                        <Label for="quantity" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Số lượng tồn kho
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="quantity"
                                                name="quantity"
                                                type="number"
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

export default AddQLSP;
