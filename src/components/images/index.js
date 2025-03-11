import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images_logo from '../../assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images_logo.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    //lúc đầu ảnh không lỗi sẽ là src
    //nếu lỗi mà mình k truyền fallback thì mặc định nó là images.noImage
    // nếu muốn tùy chỉnh kiểu hình lỗi ở th khác thì tuyền fallback
    //class để trong tương lai nếu muốn customize riêng
    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
