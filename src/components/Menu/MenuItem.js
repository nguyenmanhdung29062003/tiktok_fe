import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../Button';
const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
//hoặc sd destructuring giúp code rõ ràng hơn
// function MenuItem({ item }) {
//     return <div className={cx('content')}>{item.title}</div>;
// }
