import { Wrapper as PopperWrapper } from '~/components/Popper'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggetstedAccouts.module.scss'
import AccoutPreview from './AccoutReview/AccoutReview'

const cx = classNames.bind(styles)
function AccoutItem() {
    const renderReview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper >
                    <AccoutPreview />
                </PopperWrapper>
            </div>
        )
    }
    return (

        <div>
            <Tippy
                offset={[-20, 0]}

                appendTo={() => document.body}
                interactive
                delay={[800, 0]}
                placement="bottom"
                render={renderReview}
            >
                <div className={cx('accout-item')}>
                    <img
                        className={cx('avatar')}
                        src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1676872800&x-signature=GU%2Fmstq%2FwOipgxq8KqQ5j1l3U7o%3D' alt='theanh28'
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>huỳnhnhậtquang</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}> huỳnh nhật quang</p>


                    </div>
                </div>
            </Tippy>
        </div>

    );
}


export default AccoutItem;