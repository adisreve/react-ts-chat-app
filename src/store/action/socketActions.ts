import { CONNECTION_CHANGED, CONNECT_SOCKET } from '../types';

export const connectionChanged = (isConnected: boolean) => {
  return {
    type: CONNECTION_CHANGED,
    connected: isConnected,
    isError: false
  };
};

export const connectSocket = () => {
  return {
    type: CONNECT_SOCKET
  };
};