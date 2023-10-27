import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <Button color="primary" aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Increment
                </Button>
                <span>{count}</span>
                <Button color="danger" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Decrement
                </Button>
            </div>
        </div>
    );
}
export default Counter;