import Socket from "./Socket";
import { connectionChanged } from "../action/socketActions";
import { messageReceived, messageSent } from "../action/chatActions";
import { SEND_MESSAGE, CONNECT_SOCKET, Message } from "../types";

const socketMiddleware = (store: any) => {

  const onConnectionChange = (isConnected: boolean) => {
    store.dispatch(connectionChanged(isConnected));
  };

  const onIncomingMessage = (message: Message) => store.dispatch(messageReceived(message));

  const socket = new Socket(onConnectionChange, onIncomingMessage);

  return (next: any) => (action: any) => {
    const user = store.getState().settings.username;
    const socketState = store.getState().socketState;

    switch (action.type) {
      case CONNECT_SOCKET:
        socket.connect(user, socketState.port);
        break;

      case SEND_MESSAGE:
        socket.sendMessage(action.payload);
        store.dispatch(messageSent());
        break;

      default:
        break;
    }

    return next(action)
  };
};

export default socketMiddleware;