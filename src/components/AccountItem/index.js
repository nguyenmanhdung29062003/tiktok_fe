import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/480969488_560018257060883_4800137662314978523_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0HwD9GOrvA75HeOo6iinsdNVrDU01kbJ01WsNTTWRsmyUDNFbznhM8Uf5DUHehU-2gHTo4J-35g3WPILU3Ii9&_nc_ohc=o5RGlrxfv68Q7kNvgEtNw3J&_nc_oc=Adh2Y28Ab8T-TvEU_yptb43O8BhJkjxZGfe1DC8N4Fm-VQHPSBlHOqmA4ok2OJciMhvWbnixW6nV6q-7TIudG6RO&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AGFmuMBz85O_f0OMa-v8fzY&oh=00_AYCZbm-ZhfddJH31EVFCbSxfnFAmDpCEUz3KhMs3rcazuQ&oe=67CB2C72"
                alt=""
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Manh Dung</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>manhdungne</span>
            </div>
        </div>
    );
}

export default AccountItem;
