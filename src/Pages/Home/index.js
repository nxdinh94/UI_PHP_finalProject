import { Container, Row, Col } from 'reactstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { PostsList } from '~/features/posts/PostsList';
import { AddPostForm } from '~/features/posts/AddPostForm';

import './Home.scss';

function Home() {
    
    
    return (
        <div>
            <Container fluid>
                <div className="container">
                    <Row>
                        <Col md="3" lg="4">

                        </Col>
                        <Col md="3" lg="4">
                            <h1>Home</h1>
                        </Col>
                        <Col md="3" lg="4">
                            <h1>Home</h1>
                        </Col>
                        <Col md="3" lg="4">
                            <h1>Home</h1>
                        </Col>
                        <Col md="3" lg="4">
                            <h1>Home</h1>
                        </Col>
                    </Row>
                </div>
                <AddPostForm />
                <PostsList />
            </Container>
        </div>
    );
}
export default Home;
