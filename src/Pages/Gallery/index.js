import { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { images, CustomImage } from './images.js';
import { useTranslation } from 'react-i18next';
import { Container } from 'reactstrap';
import './Gallery.scss';
import SiblingComponent from '~/components/common/SiblingComponent.js';
export default function App() {
    const [index, setIndex] = useState(-1);
    const { t } = useTranslation();
    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index, item) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return (
        <Container className="my-5">
            <div className="text-center">
                <SiblingComponent sibling1={'gallery'} sibling2={['gallery']} />
            </div>

            <Gallery images={images} onClick={handleClick} enableImageSelection={false} />
            {!!currentImage && (
                /* @ts-ignore */
                <Lightbox
                    mainSrc={currentImage.original}
                    imageTitle={currentImage.caption}
                    mainSrcThumbnail={currentImage.src}
                    nextSrc={nextImage.original}
                    nextSrcThumbnail={nextImage.src}
                    prevSrc={prevImage.original}
                    prevSrcThumbnail={prevImage.src}
                    onCloseRequest={handleClose}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
        </Container>
    );
}
