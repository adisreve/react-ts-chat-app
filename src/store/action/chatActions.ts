import { Message, GET_MESSAGES, SEND_MESSAGE, MESSAGE_SENT, SEND_MESSAGE_RESPONSE } from '../types'

export const messageReceived = (message: Message) => ({
      type: SEND_MESSAGE_RESPONSE,
      payload: message
});

export const messageSent = () => ({
    type: MESSAGE_SENT
});

// Define action for getting messages
// export const getMesages = () => ({
//     type: GET_MESSAGES
// })

// Define action for storing message 
export const sendMessage = (message: Message ) => ({
    type: SEND_MESSAGE,
    payload: message
})



  
