import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Input, Label } from 'reactstrap';

import './QLTK.scss';

function QLTK() {
    return (
        <div className="content">
            <div className="div-title">
                <p className="my-0"> Database hoa don</p>
            </div>
            <div className="div-content">
                <div className="div-action">
                    <button className="btn btn-primary"> Thêm mới</button>
                    <div className="div-search">
                        <Input />
                        <Label>Search</Label>
                    </div>
                </div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Username</th>
                            <th>Username</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default QLTK;
