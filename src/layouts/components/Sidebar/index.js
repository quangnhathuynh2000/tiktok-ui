import classNames from 'classnames/bind'
import { HomeIcon, HomeIconActive, UserGroupActive, UserGroupIcon, LiveIconActive, LiveIcon } from '~/components/Icons';
import styles from './Sidebar.module.scss'
import config from '~/config'
import Menu, { MenuItem } from './Menu'
import SuggetstedAccouts from '~/components/SuggetstedAccouts'
const cx = classNames.bind(styles)
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActive />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
            </Menu>
            <SuggetstedAccouts label='suggested accouts' />
            <SuggetstedAccouts label='Following accouts' />

        </aside>
    );
}

export default Sidebar;