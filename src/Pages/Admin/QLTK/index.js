import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Input, Label } from 'reactstrap';

import { useSelector } from 'react-redux';

import './QLTK.scss';

function QLTK() {
    const accountData = useSelector((state) => state.QLTKSlice.value);
    console.log(accountData);
    return (
        <div className="content">
            <div className="div-title">
                <p className="my-0"> Database hoa don</p>
            </div>
            <div className="div-content">
                <div className="div-action">
                    <button className="btn btn-primary"> Thêm mới</button>
                    <div className="div-search">
                        <Input placeholder="Search" className="ps-2" />
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
                        {accountData.map((item) => (
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
                                    <button className="btn btn-danger">Cấm</button>
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
