import classNames from "classnames/bind";
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
const cx = classNames.bind(styles)
function Button({
    to,
    rightIcon,
    leftIcon,
    rounded = false,
    disable = false,
    text = false,
    small = false,
    large = false,
    href,
    outline = false,
    children,
    primary = false,
    className,
    onClick,
    ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    //remove event listener when button disable
    if (disable) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = `a`
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
        leftIcon,
        rightIcon,
        [className]: className,
    })
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    rightIcon: PropTypes.node,
    leftIcon: PropTypes.node,
    rounded: PropTypes.bool,
    disable: PropTypes.bool,
    text: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    href: PropTypes.string,
    outline: PropTypes.bool,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;