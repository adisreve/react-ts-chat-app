import React from 'react'
import moment from "moment";
import Avatar from "react-avatar";
import Linkify from "linkifyjs/react";
import Emoji from "react-emoji-render";

// Module SCSS
import styles from './ChatPanel.module.scss';
import { store } from '../..';

interface Props {
    username: string,
    position: string,
    text: string,
    date: Date,
    clockFormat: '24h' | '12h'
}

export const MessagePanel: React.FC<Props> = props => {
    const date = props.clockFormat === '24h' ? moment(props.date).format('HH:mm') : moment(props.date).format('hh:mm A');
    const isCurrent = props.username === store.getState().settings.username ? 'right' : 'left';

    return (
        <div className={`${styles.bubbleContainer} ${isCurrent}`}>

            <div className={`${styles.chatPanel__messageBubble} ${styles[isCurrent]} chat-${isCurrent}`}>
                <span className={`${styles.date} date_field`}>{date}</span>
                <p className={styles.paragraph}><Linkify><Emoji text={props.text} /></Linkify></p>
            </div>
            <Avatar className={styles.avatar} name={props.username} round={true} size="45"></Avatar>
        </div>
    )
}
