import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

//để bind object styles vào và trả ra một method function cx
//=> giúp viết className dưới dạng dấu -
//vd .post-item{}
function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </footer>
    );
}

export default Footer;
