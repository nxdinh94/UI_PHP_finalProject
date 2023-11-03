import { useState, forwardRef } from 'react';
import './Image.scss';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    let width = props.width;
    let height = props.height;
    let borderRadius = props.borderRadius;
    let hover = props.hover;
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback('../../../public/images/alt_img.png');
    };
    return (
        <img
        className='myImage'
            style={{hover: hover || 0, width: width, height: height, objectFit: 'cover', objectFit: 'cover', borderRadius: borderRadius }}
            ref={ref}
            alt={alt}
            src={fallback || src}
            onError={handleError}
        />
    );
});
export default Image;
