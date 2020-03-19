import React, { useState, useRef, useEffect } from 'react'

// Module scss
import styles from './ChatPanel.module.scss';
import inputStyles from './InputField.module.scss';

// Component imports
import { MessagePanel } from './MessagePanel';
import { InputField } from './InputField';

// Redux imports
import { connect } from "react-redux";
import { sendMessage } from "../../store/action/chatActions";
import { getSettings } from '../../store/action/settingsActions';
import { AppState } from "../../store/reducers";
import { Message, Settings } from '../../store/types';

interface MessageProps {
    messages: Message[],
    settings: Settings,
    // getMessages: typeof getMesages,
    sendMessage: typeof sendMessage
}

export type UpdateMessageParam = React.SyntheticEvent<{ value: string }>;

export const isPageActive = (pageHash: string): boolean => window.location.hash.split('/')[1] === pageHash;
  
const ChatPanel: React.FC<MessageProps> = (props) => {
    const [messageText, setMessageText] = useState({ text: '' });

    useEffect(() => {
       scrollToBottom('auto');
    }, [props]);

    const chatPanelRef = useRef<HTMLInputElement>(null);
    const myRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = (behavior: "auto" | "smooth" | undefined) => {
        const elementOffset = myRef.current?.offsetTop ? myRef.current!.offsetTop : 0;

        chatPanelRef.current?.scrollTo({ behavior: behavior, top: elementOffset})
    }

    const sendMessage = (message: string): void => {
        props.sendMessage({
            user: props.settings.username,
            message,
            date: new Date(),
            position: 'right'
        })

        setMessageText({ text: '' });

        scrollToBottom('smooth');
    }

    const updateMessage = (event: UpdateMessageParam) => {
        let newMessage = { ...messageText }
        
        newMessage.text = event.currentTarget.value;
        setMessageText({ text: newMessage.text })
    };

    const { messages } = props;

    return (
        <>
            <div className={styles.chatPanelWrapper}>
                <div className={`chatPanel ${styles.chatPanel}`}  ref={chatPanelRef}>
                    {messages.map((message,i) => (
                        <MessagePanel key={i} position={message.position} text={message.message} date={message.date} clockFormat={props.settings.clockFormat} username={message.user}/>
                    ))}
                    <div ref={myRef}></div>
                </div>
            </div>
            <div className={inputStyles.inputContainer}>
                    <InputField message={messageText.text} userName={props.settings.username} onEnter={props.settings.onEnter} sendMessage={sendMessage} updateMessage={updateMessage}></InputField>
            </div>
        </>
    )
}

const mapStateToProps = (state: AppState) => ({
    messages: state.chat.messages,
    settings: state.settings,
    socket: state.socketState
})

export default connect(mapStateToProps, { sendMessage, getSettings })(ChatPanel);