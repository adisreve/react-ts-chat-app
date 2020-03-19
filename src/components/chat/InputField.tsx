import React from 'react'
import { UpdateMessageParam } from './ChatPanel';

import styles from './InputField.module.scss';

interface InputProps {
    message: string;
    userName: string;
    onEnter: boolean,
    sendMessage: (message: string) => void;
    updateMessage: (event: UpdateMessageParam) => void;
}

export const InputField: React.FC<InputProps> = ({userName, onEnter, message, sendMessage, updateMessage}) => {
    const keyPress = (e: React.KeyboardEvent<any>) => {
        if(onEnter) {
            if(e.ctrlKey && e.charCode === 13) send();
        }
    }

    const send = () => {
        if(message !== '') sendMessage(message);
    }

    return (
        <>
           <div className={styles.inputContainer}>
                <input
                    type="text"
                    value={message}
                    onChange={updateMessage}
                    onKeyPress={keyPress}
                    className="chat-input"
                    placeholder="Type a message..."
                />
                <button onClick={send}>Send</button>
            </div> 
        </>
    )
}
