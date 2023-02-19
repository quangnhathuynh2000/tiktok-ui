import classNames from 'classnames/bind';
import Button from "~/components/Button";
import styles from './AccoutReview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)


function AccoutPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1676872800&x-signature=GU%2Fmstq%2FwOipgxq8KqQ5j1l3U7o%3D' alt='theanh28'
                />
                <Button className={cx('follow-btn') } primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>huỳnhnhậtquang</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}> huỳnh nhật quang</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')} >Follower </span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')} >Likes</span>
                </p>


            </div>

        </div>
    );
}

export default AccoutPreview;