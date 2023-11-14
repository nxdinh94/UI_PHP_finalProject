import { Container, Row, Col } from 'reactstrap';
import NewsItem from '../../components/NewsItem';
import './News.scss';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
function News() {
    const dataCate = useSelector((state) => state.newsSlices.value);
    // console.log('dataCate', dataCate);
    let { slug } = useParams();
    if (!slug) slug = 'dog';
    // console.log('slug', slug);
    const [dataByCate, setDataByCate] = useState(dataCate[slug]);
    // console.log('dataBycate', dataByCate);
    useEffect(() => {
        setDataByCate(dataCate[slug]);
    }, [slug]);

    return (
        <Container className="search my-5">
            <Row>
                <div className="col-7 m-auto mb-5">
                    <div className="input-group">
                        <input type="text" className="form-control my-0" placeholder="Search" />
                        <button className="btn btn-success shadow " type="submit">
                            Go
                        </button>
                    </div>
                </div>
            </Row>
            <Row>
                <Col lg="8" className="px-0">
                    <Row>
                        {dataByCate.map((items, index) => (
                            <Col lg="6" key={index}>
                                <NewsItem data={items} slug={slug} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col lg="4">
                    <div className="right-sidebar">
                        <div className="wrapper-cate">
                            <h4>Categories</h4>
                            <u className="list-cate">
                                <li className="item-cate">
                                    <FontAwesomeIcon icon={faGreaterThan} size="xs" />
                                    <Link to="/news/dog/category">
                                        <span>Dog</span>
                                    </Link>
                                </li>
                                <li className="item-cate">
                                    <FontAwesomeIcon icon={faGreaterThan} size="xs" />
                                    <Link to="/news/cat/category">
                                        <span>Cat</span>
                                    </Link>
                                </li>
                                <li className="item-cate">
                                    <FontAwesomeIcon icon={faGreaterThan} size="xs" />
                                    <Link to="/news/petnews/category">
                                        <span>Pet News</span>
                                    </Link>
                                </li>
                                <li className="item-cate">
                                    <FontAwesomeIcon icon={faGreaterThan} size="xs" />
                                    <Link to="/news/catnews/category">
                                        <span>Cat News</span>
                                    </Link>
                                </li>
                            </u>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default News;
