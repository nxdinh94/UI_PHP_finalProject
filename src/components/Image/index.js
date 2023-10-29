import { useState, forwardRef } from 'react';
import images from '~/assets/images';
const Image = forwardRef(({ src, alt, ...props }, ref) => {
    console.log('check src', src);
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.altImage);
    };
    return <img ref={ref} alt={alt} src={fallback || src} onError={handleError} />;
});
export default Image;
