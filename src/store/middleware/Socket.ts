import io from 'socket.io-client';
import { Message } from '../types';

const EVENTS = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  MESSAGE: 'message'
};

export default class Socket {
  public user: string;
  public port: string;
  private onChange: (isConnected: boolean) => void;
  private onMessage: (message: Message) => void;
  private socket: any;

  constructor(onChange: (isConnected: boolean) => void, onMessage: (message: Message) => void) {
    this.onChange = onChange;
    this.onMessage = onMessage;
    this.socket = '';
    this.user = '';
    this.port = '';
  }

  public connect = (user: string, port: string) => {
    this.user = user;
    this.port = port;

    const host = `http://localhost:${port}`; // Running from local network
    
    this.socket = io.connect(host);
    
    this.socket.on(EVENTS.CONNECT, this.onConnected);
  };

  public onConnected = () => {
    this.socket.on(EVENTS.MESSAGE, this.onMessage);
    this.onChange(true);
  };

  public sendMessage = (message: Message) => {
    if (typeof this.socket.emit === 'function') {
      this.socket.emit(EVENTS.MESSAGE, message)
    } else {
      console.error('Cannot emit - socket.io disconnected.');
    }
  };

  public disconnect = () => this.socket.close();
}
