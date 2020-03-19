import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from 'react-router-dom';

// Custom imports
import { ToggleSwitch } from "../theme/toggleSwitch";

// Redux imports
import { connect } from "react-redux";
import { AppState } from "../../store/reducers";
import { getSettings } from '../../store/action/settingsActions';
import { connectSocket } from '../../store/action/socketActions';

// Module scss
import styles from './Header.module.scss';

interface HeaderProps {
    messages: any,
    toggleTheme: (event: React.MouseEvent<HTMLInputElement>) => void,
    notifications: number,
    connectSocket: typeof connectSocket
}


export const usePrevious = <T extends any>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Header: React.FC<HeaderProps> = props => {
    const [messageArr, setMessageArr] = useState([])
    const [notification, setNotification] = useState(0)
    const location = useLocation()

    const { messages } = props;
    const prev = usePrevious(props);

    useEffect(() => {
        connectToSockets();
    }, [])

    useEffect(() => {
        if(prev !== undefined && prev?.messages.length !== messages.length && location.pathname !== '/chat') {
            const lastMsg = messages[prev?.messages.length - 1];

            setMessageArr((messageArr): any => [...messageArr, lastMsg])
            setNotification(messageArr.length + 1);
        }
    }, [messages])

    // Clear notifications on click
    const clearNotifications = (): void => {
        setMessageArr([]);
        setNotification(0)
    }

    const connectToSockets = () => {
        props.connectSocket();
    }

    return (
        <div className={`header ${styles.navbar}`}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/chat" className={styles.navbar__link} activeClassName='active' onClick={(e) => { clearNotifications(); } }>Chat
                                {notification > 0 ? ( 
                                    <span className={styles.chatNotification}>{notification}</span> )
                                 : ''
                                 }
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings" className={styles.navbar__link} activeClassName='active' >Settings</NavLink>
                        </li>
                    </ul>
                    <ToggleSwitch toggleTheme={props.toggleTheme}/> 
                </nav>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    messages: state.chat.messages,
    notifications: state.settings.unread
})

export default connect(mapStateToProps, { getSettings, connectSocket })(Header);
