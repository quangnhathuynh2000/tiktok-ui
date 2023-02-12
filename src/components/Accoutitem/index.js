import classNames from "classnames/bind";
import styles from './Accoutitem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function AccoutItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ff6cfa684d7eb1c00409c4214d8ab62f~c5_300x300.webp?x-expires=1676354400&x-signature=Sti%2BY6GUoNB0Z9ylEmP5pZiufwI%3D" alt="quang" />
            <div className={cx('info')}>
                <h4 className={cx('name')} >
                    <span>
                        Nguyễn văn A
                    </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>

                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div >
    );
}

export default AccoutItem;