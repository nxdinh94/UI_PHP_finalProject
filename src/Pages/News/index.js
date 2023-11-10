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
                <div className="col-7 m-auto mb-3">
                    <div className="input-group">
                        <input type="text" className="form-control my-0" placeholder="Search" />
                        <button className="btn btn-success" type="submit">
                            Go
                        </button>
                    </div>
                </div>
                <div className="col-7 m-auto mb-5 d-flex justify-content-between flex-wrap">
                    <div className="category px-2 d-flex">
                        <div className="cate-1 cate">
                            <box-icon color="rgb(60, 89, 206)" animation="tada-hover" name="search"></box-icon>
                            <sup>Tìm kếm</sup>
                        </div>
                        <div className="cate-2 cate mx-4">
                            <box-icon
                                color="rgb(60, 89, 206)"
                                animation="tada-hover"
                                name="blogger"
                                type="logo"
                            ></box-icon>
                            <sup>Bài viết</sup>
                        </div>
                    </div>
                    <div className="advanced">
                        <button className="border-0 bg-transparent">
                            <sup>Tìm kiếm nâng cao</sup>
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
                            </u>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default News;
