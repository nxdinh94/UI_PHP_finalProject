import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Table } from 'reactstrap';
import './QLSP.scss';

import { useDispatch, useSelector } from 'react-redux';
import routes from '~/config/routes';
import { handleDeleteProduct } from '~/service/adminService';
import { handleFetchAllProductThunk } from '~/Pages/Store/StoreSlice';
import { toast } from 'react-toastify';
import Toastify from '~/components/Toastify';
import { useEffect, useState } from 'react';
function QLSP() {
    const productDataFromStore = useSelector((state) => state.storeSlices.value);
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        setProductData(productDataFromStore);
    }, [productDataFromStore]);

    const dispatch = useDispatch();
    return (
        <div className="content-sp">
            <Toastify />
            <div className="div-title">
                <p className="my-0"> Database san pham</p>
                <a className="btn btn-primary text-white" href={routes.adminQlspAdd}>
                    Thêm mới
                </a>
            </div>
            <div className="div-content">
                <h1>Thống kê</h1>
                <Table bordered responsive>
                    <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Slug</th>
                            <th>Thumbnail</th>
                            <th>Thành phần</th>
                            <th>Xuất sứ</th>
                            <th>Số lượng</th>
                            <th>Màu sắc</th>
                            <th>Kích cỡ</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productData &&
                            productData.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">
                                        <a href={`${routes.adminQlspEdit}-${item.slug}`}>{item.product_name}</a>
                                    </th>
                                    <td>
                                        <span>{item.slug}</span>
                                    </td>
                                    <td>
                                        <span>{item.thumpnail2}</span>
                                    </td>
                                    <td>
                                        <span>{item.ingredient}</span>
                                    </td>
                                    <td className="td-descr">
                                        <span>{item.origin}</span>
                                    </td>
                                    <td className="td-content">
                                        <span>{item.quantity}</span>
                                    </td>
                                    <td>
                                        <span>{item.color}</span>
                                    </td>
                                    <td>
                                        <span>{item.dimensions}</span>
                                    </td>
                                    <td>
                                        <button
                                            onClick={async () => {
                                                const res = await handleDeleteProduct(item.productid);
                                                if (res.message) {
                                                    toast.success(res.message);
                                                    dispatch(handleFetchAllProductThunk());
                                                } else toast.error(res.message);
                                            }}
                                            className="btn btn-danger"
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default QLSP;
