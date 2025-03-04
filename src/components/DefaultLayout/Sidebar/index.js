import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
//để bind object styles vào và trả ra một method function cx
//=> giúp viết className dưới dạng dấu -
//vd .post-item{}

function Sidebar() {
    return <aside className={cx('wrapper')}></aside>;
}

export default Sidebar;
