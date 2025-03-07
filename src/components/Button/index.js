import classNames from 'classnames/bind';
import styles from './Button.module.scss';

//3 TH:
// TH1 mặc định Button
// TH2 <Link> truyền to để đi đến link nội bộ trong dự án
//TH3 <a> truyền href để đi đến link bên ngoài, có thể kết hợp các attribute khác như target="_blank"
//=> tạo Component đẻ tận dụng
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    leftIcon,
    rightIcon,
    text,
    primary,
    outline,
    round,
    small,
    large,
    disable,
    onClick,
    children,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    //kiểm tra nếu link ngoài thì Comp là thẻ a còn link nội bộ thì là the Link
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    //tránh disable rồi mà vẫn sd đc, delete sự kiện onClick đi
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classnames = cx('wrapper', { primary, outline, text, large, small, disable, round });

    return (
        <Comp className={classnames} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
