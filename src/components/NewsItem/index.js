import './BlogItem.scss';
import configRoutes from '../../config/routes';
import NewsDetail from '~/Pages/NewsDetail';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons'; // Import the specific icon you need

import Image from '../Image';
import { Link } from 'react-router-dom';
function BlogItem() {
    return (
        <div className="blog-item">
            <div className="blog-image">
                <Image width="100%" height="auto" src="/images/blog/blog-3.jpg" />
            </div>
            <div className="content-item">
                <div className="time_author">
                    <span>
                        <box-icon color="#89B73D" name="user"></box-icon>
                        <sup className="p-text">By John Smith</sup>
                    </span>
                    <span className="p-text">
                        <box-icon color="#89B73D" size="sx" name="stopwatch"></box-icon>
                        <sup className="p-text">6, July 2021</sup>
                    </span>
                </div>
                <div className="title">
                    <h3>Fun Ways to Exercise With Your pet</h3>
                </div>
                <div className="description p-text mb-3">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                </div>
                <Link className="buttons" to={'/news/3/detail'}>
                    Load More
                </Link>
            </div>
        </div>
    );
}

export default BlogItem;
