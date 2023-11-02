import { useState, forwardRef } from 'react';
const Image = forwardRef(({ src, alt, ...props }, ref) => {
    let width = props.width;
    let height = props.height;
    let borderRadius = props.borderRadius;
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback('../../../public/images/alt_img.png');
    };
    return (
        <img
            style={{ width: width, height: height, objectFit: 'cover', objectFit: 'cover', borderRadius: borderRadius }}
            ref={ref}
            alt={alt}
            src={fallback || src}
            onError={handleError}
        />
    );
});
export default Image;
