import { Container, Row, Col } from 'reactstrap';
import NewsItem from '../../components/news/NewsItem';
import './News.scss';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
function News() {
    const dataCate = useSelector((state) => state.newsSlices.value);
    const dateCateKeys = Object.keys(dataCate);
    // console.log('dataCate', dataCate);
    let { slug } = useParams();
    if (!slug) slug = 'dog';
    const [dataByCate, setDataByCate] = useState(dataCate[slug]);
    // console.log('dataBycate', dataByCate);

    const { t } = useTranslation();
    useEffect(() => {
        setDataByCate(dataCate[slug]);
    }, [slug]);
    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }
    function transformCategoryName(val) {
        if (!val.includes('news')) {
            return capitalizeFirstLetter(val);
        }
        const firstLett = val.slice(0, val.length - 4);
        const secondLetter = val.slice(val.length - 4);
        return capitalizeFirstLetter(firstLett) + ' ' + capitalizeFirstLetter(secondLetter);
    }
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
                                {/* slug passed is slug name's category */}
                                <NewsItem data={items} slug={slug} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col lg="4">
                    <div className="right-sidebar">
                        <div className="wrapper-cate">
                            <h4>{t('category')}</h4>
                            <u className="list-cate">
                                {dateCateKeys.map((slug, index) => {
                                    let nameCate = transformCategoryName(slug);
                                    return (
                                        <li key={index} className="item-cate">
                                            <FontAwesomeIcon className="arrow-news" icon={faGreaterThan} size="xs" />
                                            <Link to={`/news/${slug}/category`}>
                                                <span>{nameCate}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </u>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default News;
