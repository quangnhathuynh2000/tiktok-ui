import classNames from 'classnames/bind';
import styles from './SuggetstedAccouts.module.scss'
import PropTypes from 'prop-types';
import AccoutItem from './AccoutItem'
const cx = classNames.bind(styles)
function SuggetstedAccouts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')} >{label}</p>

            <AccoutItem />
            <AccoutItem />
            <AccoutItem />
            <p className={cx('more-btn')}> See All </p>
        </div >
    );
}
SuggetstedAccouts.prototype = {
    label: PropTypes.string.isRequired
}
export default SuggetstedAccouts;