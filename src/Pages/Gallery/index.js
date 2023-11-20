import './Gallery.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
function Gallery() {
    const imageStore = [
        '/images/blog/blog-3.jpg',
        '/images/blog/blog-4.jpg',
        '/images/blog/blog-5.jpg',
        '/images/blog/blog-6.jpg',
        '/images/blog/blog-7.jpg',
        '/images/blog/blog-8.jpg',
        '/images/blog/blog-2.jpg',
        '/images/blog/blog-1.jpg',
        '/images/cat/baby-cat.jpg',
        '/images/dog/gallery1.jpg',
        '/images/dog/gallery2.jpg',
        '/images/dog/gallery3.jpg',
        '/images/dog/gallery4.jpg',
        '/images/dog/gallery5.jpg',
        '/images/dog/gallery6.jpg',
        '/images/dog/golden.jpg',
        '/images/team/team-2.jpg',
        '/images/team/team-4.jpg',
    ];
    const imageStore2 = [
        '/images/dog/gallery6.jpg',
        '/images/cat/baby-cat.jpg',
        '/images/cat/meo-1-333.jpg',
        '/images/cat/meo-ba-tu.jpg',
        '/images/cat/meo-trang.jpg',
        '/images/dog/gallery3.jpg',
        '/images/dog/gallery4.jpg',
        '/images/dog/gallery5.jpg',
        '/images/cat/meo-vang.jpg',
        '/images/dog/Alaska.jpg',
        '/images/dog/chihuahua.jpg',
        '/images/dog/chó lạp xưởng.png',
        '/images/dog/dog2.jpg',
        '/images/dog/samoyed.jpg',
        '/images/dog/shiba.jpg',

        '/images/team/team-alt-1.jpg',
        '/images/team/team-alt-2.jpg',

        '/images/team/team-5.jpg',
    ];
    const imageStore3 = [
        '/images/dog/gallery-2.jpg',
        '/images/dog/gallery-3.jpg',
        '/images/dog/gallery-9.jpg',
        '/images/dog/gallery-5.jpg',
        '/images/dog/gallery-6.jpg',
        '/images/dog/gallery-7.jpg',
        '/images/dog/gallery-8.jpg',
        '/images/services/service_details-2.jpg',
        '/images/services/service-details-1.jpg',
        '/images/services/service1.jpg',
        '/images/services/service2.jpg',
        '/images/services/service3.jpg',
        '/images/services/service4.jpg',
        '/images/team/team-alt-3.jpg',
        '/images/team/team-alt-4.jpg',
    ];
    const [onHover, setOnhover] = useState(false);
    console.log(onHover);
    return (
        <Container className="my-4">
            <Row>
                <Col className="col-4 col-gallery">
                    {imageStore.map((item, index) => (
                        <div
                            key={index}
                            onMouseOver={() => {
                                setOnhover(true);
                            }}
                            onMouseLeave={() => {
                                setOnhover(false);
                            }}
                        >
                            <div className="overlayer"></div>
                            <img className="gallery-img" src={item} />
                        </div>
                    ))}
                </Col>
                <Col className="col-4 col-gallery">
                    {imageStore2.map((item, index) => (
                        <div>
                            <img className="gallery-img" src={item} key={index} />
                        </div>
                    ))}
                </Col>
                <Col className="col-4 col-gallery">
                    {imageStore3.map((item, index) => (
                        <div>
                            <img className="gallery-img" src={item} key={index} />
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

export default Gallery;
