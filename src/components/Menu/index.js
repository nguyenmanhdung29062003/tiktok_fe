import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '../Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    //lay ptu cuoi
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            //kiểm tra xem nó có phải là cha hay không "!! là để convert sang boolean"
            const isParent = !!item.children;
            //nếu cha thì thêm sư kiện append chidren vào useState do ta luôn lấy ptu cuối mảng
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive={true}
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper menu={true}>
                        {/* nếu mảng useState có từ 2 item trở lên thì mới có header */}
                        {history.length > 1 && (
                            <HeaderMenu
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {/* cái mà ta sẽ truyền vào để làm menu từ nó */}
            {children}
        </Tippy>
    );
}

export default Menu;
