import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images_logo from '../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faCoins,
    faEarthEurope,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faQuestionCircle,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '../../Button';
import Menu from '../../Menu';

import { UploadIcon, MessageIcon } from '../../icons';
import Image from '../../images';
import Search from '../../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthEurope} />,
        title: 'English',
        to: '/',
        children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng Việt' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
        to: '/',
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

//để bind object styles vào và trả ra một method function cx
//=> giúp viết className dưới dạng dấu -
//vd .post-item{}
function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images_logo.logo} alt="TikTok" />
                </div>
                <Search />
                {/* sau này vd chưa login thì render cái này, login rồi thì render cái kia*/}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom" delay={[0, 50]}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom" delay={[0, 50]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Menu items={USER_MENU} onChange={handleMenuChange}>
                                <Image
                                    src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/480969488_560018257060883_4800137662314978523_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=c4aaNn43fAAQ7kNvgEl-WVK&_nc_oc=Adg1GRndhQnh8QDHYi1K-49RIpAN2Ouuwz9f68gJYYp0rKG7aTMt2Gj-q06aE8hM2bXuTtLQUfuJ7mjfidUXusSV&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=ASOQZlI6rOr_0CowGY4YCUv&oh=00_AYGpXoqTQGS8ayPaWXJMA0Oo3RwE7WEATeVeVQkneZrgfQ&oe=67D31572"
                                    className={cx('user-avatar')}
                                    alt="manh dung"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button
                                outline={true}
                                onClick={() => {
                                    alert('hello manh dung');
                                }}
                                // disable={true}
                            >
                                Log in
                            </Button>
                            <Button primary={true} rightIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                                Upload
                            </Button>

                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
