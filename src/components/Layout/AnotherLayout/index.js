import { Fragment } from 'react';
import Navbar from '~/components/Navbar';

function AnotherLayout({ children }) {
    return (
        <Fragment>
            <Navbar />
            <h1>AnotherLayout</h1>
            {children}
        </Fragment>
    );
}

export default AnotherLayout;
