import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Input, Label } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Toastify from '~/components/Toastify';

import { useDispatch } from 'react-redux';
import './QLDV.scss';
import routes from '~/config/routes';
import { handleDeleteService } from '~/service/adminService/';
import { handleGetAllServicesThunk } from '~/Pages/Service/ServicesSlice';

function QLDV() {
    const [searchValue, setSearchValue] = useState('');

    const dispatch = useDispatch();
    const { slug } = useParams();
    // console.log('slug', slug);
    const serviceData = useSelector((state) => state.servicesSlices.value);
    // console.log(serviceData);

    const handleOnChangeSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="content">
            <Toastify />
            <div className="div-title">
                <p className="my-0"> Database dịch vụ</p>
            </div>
            <div className="div-content">
                <div className="div-action">
                    <a href={routes.adminQldvAdd} className="btn btn-primary text-white">
                        Thêm mới
                    </a>
                    <div className="div-search">
                        <Input
                            placeholder="Search"
                            className="ps-2"
                            value={searchValue}
                            onChange={handleOnChangeSearchValue}
                        />
                    </div>
                </div>
                <h1>Danh sách</h1>
                <Table responsive>
                    <thead>
                        <tr>
                            <th className="fw-bold">Name</th>
                            <th className="fw-bold">Slug</th>
                            <th className="fw-bold">Icon</th>
                            <th className="fw-bold">Description</th>
                            <th className="fw-bold">Content</th>
                            <th className="fw-bold">Cost</th>
                            <th className="fw-bold">Team</th>
                            <th className="fw-bold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {serviceData &&
                            serviceData.map((item) => (
                                <tr key={item.id}>
                                    <th scope="row">
                                        <a href={`${routes.adminQldvEdit}-${item.slug}`}>{item.name}</a>
                                    </th>
                                    <td>
                                        <span>{item.slug}</span>
                                    </td>
                                    <td>
                                        <span>{item.icon}</span>
                                    </td>
                                    <td className="td-descr">
                                        <span>{item.dersc}</span>
                                    </td>
                                    <td className="td-content">
                                        <span>{item.content}</span>
                                    </td>
                                    <td>
                                        <span>{item.cost}</span>
                                    </td>
                                    <td>
                                        <span>{item.teamid}</span>
                                    </td>
                                    <td>
                                        <button
                                            onClick={async () => {
                                                const res = await handleDeleteService(item.id);
                                                if (res.status) {
                                                    toast.success(res.message);
                                                    dispatch(handleGetAllServicesThunk());
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

export default QLDV;
