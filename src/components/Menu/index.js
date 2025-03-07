import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '../Popper';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);

function Menu({ children, items }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    console.log(items);

    return (
        <Tippy
            visible={true}
            interactive={true}
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper menu={true}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {/* cái mà ta sẽ truyền vào để làm menu từ nó */}
            {children}
        </Tippy>
    );
}

export default Menu;
