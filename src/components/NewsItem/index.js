import './NewsItem.scss';

import Image from '../Image';
import { Link } from 'react-router-dom';
function NewsItem({ data, slug }) {
    return (
        <div className="blog-item">
            <div className="blog-image">
                <Image width="100%" height="auto" src={data.thumbnail} />
            </div>
            <div className="content-item">
                <div className="time_author">
                    <span>
                        <box-icon color="#89B73D" name="user"></box-icon>
                        <sup className="p-text">{data.author || 'Admin'}</sup>
                    </span>
                    <span className="p-text">
                        <box-icon color="#89B73D" size="sx" name="stopwatch"></box-icon>
                        <sup className="p-text">{data.create_at}</sup>
                    </span>
                </div>
                <div className="title">
                    <h3>{data.title}</h3>
                </div>
                <div className="description p-text mb-3">{data.descr}</div>
                <a className="buttons" href={`/news/${slug}/${data.slug}/detail`}>
                    Load More
                </a>
            </div>
        </div>
    );
}

export default NewsItem;
