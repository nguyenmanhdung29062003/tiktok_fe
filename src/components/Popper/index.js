import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, menu }) {
    const classes = cx('wrapper', { menu });
    return <div className={classes}>{children}</div>;
}

export { Wrapper };
