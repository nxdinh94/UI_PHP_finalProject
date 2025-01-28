import './NewsItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';

function NewsItem({ data, slug }) {
    return (
        <div className="blog-item">
            <div className="blog-image">
                <img className="my-image" src={data.thumbnail} />
            </div>
            <div className="content-item">
                <div className="time_author">
                    <span>
                        <FontAwesomeIcon icon={faUser} />
                        <span className="p-text">{data.author || 'Admin'}</span>
                    </span>
                    <span className="p-text">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span className="p-text">{data.created_at}</span>
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
