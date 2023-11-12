import { Container, Row, Col } from 'reactstrap';
import NewsItem from '../../components/NewsItem';
import './News.scss';
import 'boxicons';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
function News() {
    const dataCate = useSelector((state) => state.newsSlices.value);
    // console.log('dataCate', dataCate);
    let { slug } = useParams();
    if(!slug) slug='dog';
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
                        <button className="btn btn-success" type="submit">
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
                                    <box-icon color="#EC5078" name="chevron-right"></box-icon>
                                    <Link to="/news/dog/category">
                                        <sup>dog</sup>
                                    </Link>
                                </li>
                                <li className="item-cate">
                                    <box-icon color="#EC5078" name="chevron-right"></box-icon>
                                    <Link to="/news/cat/category">
                                        <sup>cat</sup>
                                    </Link>
                                </li>
                                <li className="item-cate">
                                    <box-icon color="#EC5078" name="chevron-right"></box-icon>
                                    <Link to="/news/petnews/category">
                                        <sup>Pet News</sup>
                                    </Link>
                                </li>
                                <li className="item-cate">
                                    <box-icon color="#EC5078" name="chevron-right"></box-icon>
                                    <Link to="/news/catnews/category">
                                        <sup>Cat News</sup>
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
