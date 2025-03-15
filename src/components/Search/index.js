import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '../AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpider, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';
import { useDebounce } from '../../hooks';
import axios from 'axios';

const cx = classNames.bind(styles);

function Search() {
    //chứa giá trị input sd trong onChange input
    const [searchValue, setSearchValue] = useState('');
    //danh sach results trả về
    const [searchResult, setSearchResult] = useState([]);
    //xem có hiển thị kết quả hay không
    const [showResult, setShowResult] = useState(true);
    //làm loading khi tìm kiếm
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    //fake api
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debouncedValue]);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            visible={showResult && searchResult.length > 0}
            interactive={true}
            placement="bottom"
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>

                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            //khi click ra ngoài thì ẩn đi kết quả
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    placeholder="Search accounts and videos"
                    spellCheck="false"
                    value={searchValue}
                    ref={inputRef}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear-btn')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
