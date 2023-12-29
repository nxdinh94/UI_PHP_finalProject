import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Input, Label } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { handleStatusAccountApi } from '~/service/adminService';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Toastify from '~/components/Toastify';

import { useDispatch } from 'react-redux';
import { handleFetchAccountDataCompetentPersonnelThunk, handleFetchAccountDataUsertsThunk } from './QLTKSlices';
import './QLTK.scss';

function QLTK() {
    const accountPersonnel = useSelector((state) => state.QLTKSlice.value.competentPersonnel);
    const accountUser = useSelector((state) => state.QLTKSlice.value.usersPersonnel);
    const [searchValue, setSearchValue] = useState('');
    const [dataToMap, setDataToMap] = useState([]);
    const dispatch = useDispatch();
    const { slug } = useParams();
    // console.log('slug', slug);
    console.log(dataToMap);

    const handleOnChangeSearchValue = (e) => {
        setSearchValue(e.target.value);
    };
    const handleStatusAccount = async (id, status) => {
        const res = await handleStatusAccountApi(id, status);
        if (slug == 'qltkpersonnel') {
            dispatch(handleFetchAccountDataCompetentPersonnelThunk());
            setDataToMap(accountPersonnel);
        } else {
            dispatch(handleFetchAccountDataUsertsThunk());
            setDataToMap(accountUser);
        }
        toast.success(res.message, {
            hideProgressBar: true,
        });
    };

    useEffect(() => {
        if (slug === 'qltkpersonnel') {
            dispatch(handleFetchAccountDataCompetentPersonnelThunk()).then(() => {
                setDataToMap(accountPersonnel);
            });
        } else {
            dispatch(handleFetchAccountDataUsertsThunk()).then(() => {
                setDataToMap(accountUser);
            });
        }
    }, []);
    return (
        <div className="content">
            <Toastify />
            <div className="div-title">
                <p className="my-0"> Database hoa don</p>
            </div>
            <div className="div-content">
                <div className="div-action">
                    <button className="btn btn-primary"> Thêm mới</button>
                    <div className="div-search">
                        <Input
                            placeholder="Search"
                            className="ps-2"
                            value={searchValue}
                            onChange={handleOnChangeSearchValue}
                        />
                    </div>
                </div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th className="fw-bold">ID</th>
                            <th className="fw-bold">Full Name</th>
                            <th className="fw-bold">Email</th>
                            <th className="fw-bold">SDT</th>
                            <th className="fw-bold">Address</th>
                            <th className="fw-bold">Role</th>
                            <th className="fw-bold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataToMap &&
                            dataToMap.map((item) => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.fullname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    <td>Staff</td>
                                    <td>
                                        <button className="btn btn-success">Xem</button>
                                        <button className="btn btn-warning mx-1">Sửa</button>
                                        {item.status === 1 ? (
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleStatusAccount(item.id, '2')}
                                            >
                                                Cấm
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleStatusAccount(item.id, '1')}
                                            >
                                                Hủy
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default QLTK;
