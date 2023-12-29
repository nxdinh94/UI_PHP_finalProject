import './EditQLSP.scss';
import { Col, Container, FormGroup, Input, Label, Row, Table } from 'reactstrap';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import Toastify from '~/components/Toastify';
import { handleUpdateProducts } from '~/service/adminService';

function EditQLSP() {
    const [isPreviewMode, setIsPreviewMode] = useState(true);

    const allProduct = useSelector((state) => state.storeSlices.value);
    // console.log('All Product', allProduct);
    const { slug } = useParams();
    const specificProduct = allProduct.filter((item) => {
        return slug.includes(item.slug);
    });

    const userData = JSON.parse(sessionStorage.getItem('user_data'));
    const userId = userData.id;
    const productId = specificProduct[0].productid;
    const evaluate_quantity = specificProduct[0].evaluate_quantity;
    const [product_name, setProduct_name] = useState(specificProduct[0].product_name);
    const [newSlug, setNewSlug] = useState(specificProduct[0].slug);
    const [thumpnail2, setThumpnail2] = useState(specificProduct[0].thumpnail2);
    const [description, setDescription] = useState(specificProduct[0].description);
    const [ingredient, setIngredient] = useState(specificProduct[0].ingredient);
    const [price, setPrice] = useState(specificProduct[0].price);
    const [dimensions, setDimensions] = useState(specificProduct[0].dimensions);
    const [color, setColor] = useState(specificProduct[0].color);
    const [origin, setOrigin] = useState(specificProduct[0].origin);
    const [product_status, setProduct_status] = useState(specificProduct[0].product_status);
    const [promotionid, setPromotionid] = useState(specificProduct[0].promotionid);
    const [quantity, setQuantity] = useState(specificProduct[0].quantity);

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
                setThumpnail2(e.target.value);
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
            case 'promotionid':
                setPromotionid(e.target.value);
                break;
            case 'quantity':
                setQuantity(e.target.value);
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
            const res = await handleUpdateProducts({
                productId,
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
                promotionid,
                quantity,
            });
           
            setIsPreviewMode(!isPreviewMode);
        }
    };
    return (
        <div className="content">
            <Toastify />
            <div className="div-title">
                <p className="my-0"> Database san pham</p>
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
                                                product_name="product_name"
                                                type="text"
                                                value={product_name}
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
                                        <Label for="thumpnail2" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Thumbnail
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="thumpnail2"
                                                name="thumpnail2"
                                                onChange={handleOnChangeInput}
                                                type="text"
                                                value={thumpnail2}
                                                disabled={isPreviewMode}
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
                                                disabled={isPreviewMode}
                                                onChange={handleOnChangeInput}
                                                value={ingredient}
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
                                                value={description}
                                                disabled={isPreviewMode}
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
                                                type="text"
                                                disabled={isPreviewMode}
                                                onChange={handleOnChangeInput}
                                                value={price}
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
                                                value={dimensions}
                                                disabled={isPreviewMode}
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
                                                value={color}
                                                disabled={isPreviewMode}
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
                                                value={origin}
                                                disabled={isPreviewMode}
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
                                                type="text"
                                                onChange={handleOnChangeInput}
                                                value={product_status}
                                                disabled={isPreviewMode}
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
                                                onChange={handleOnChangeInput}
                                                value={promotionid || 'Chưa có khuyến mãi được áp dụng'}
                                                disabled={isPreviewMode}
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
                                                type="text"
                                                onChange={handleOnChangeInput}
                                                value={quantity}
                                                disabled={isPreviewMode}
                                                style={{ marginBottom: 10, padding: '0px, 0px, 0px, 5px' }}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup row>
                                        <Label for="evaluate_quantity" size="md" sm={2} style={{ paddingTop: 20 }}>
                                            Số lượng đánh giá
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                bsSize="md"
                                                id="evaluate_quantity"
                                                name="evaluate_quantity"
                                                type="text"
                                                onChange={handleOnChangeInput}
                                                value={evaluate_quantity}
                                                disabled
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

export default EditQLSP;
