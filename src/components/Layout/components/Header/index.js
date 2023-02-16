
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '~/assets/images'
import Images from '~/components/Image'
import Button from '~/components/Button'
import { Link } from 'react-router-dom'
import { faSignIn, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Search from '~/components/Layout/components/Search'
import routesConfig from '~/config/routes'


const cx = classNames.bind(styles)
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt'
                }

            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
]
function Header() {

    const currentUser = true;


    const handleMenyChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':

                // handle change language
                break;
            default:
        }
    }
    const userMenu = [
        {

            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/quang'

        },
        {

            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'

        },
        {

            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'

        },
        ...MENU_ITEMS,
        {

            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}> <img src={images.logo} alt="TikTok" /> </Link>

                <Search />


                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-button')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-button')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-button')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>

                        </>
                    ) : (
                        <>
                            <Button text >Upload</Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />} >Log in</Button>

                        </>
                    )}
                    <Menu

                        items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenyChange}>
                        {currentUser ? (
                            <Images src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/315063553_1724460801288501_3151682870300255617_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lzGWo_wXmpoAX8fod58&_nc_ht=scontent.fdad2-1.fna&oh=00_AfDE1P2wLyJcdXNA71W1cY9IptucfGq5Ffev13-pWFrKig&oe=63EF3A0F" className={cx('user-avatar')} alt="huỳnh nhật quang" />
                        ) : (

                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} /> </button>
                        )}
                    </Menu>
                </div>
            </div >
        </header >
    );
}

export default Header;