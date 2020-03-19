
import {  SocketActionTypes, SocketState, CONNECTION_CHANGED } from '../types';

export const initialState: SocketState = {
  connected: false,
  port: 3001
};

export default function socketReducer(state = initialState, action: SocketActionTypes ): SocketState {
  switch (action.type) {
    case CONNECTION_CHANGED: 
      return {
        ...state,
        connected: action.connected,
        isError: false
      }
    default: 
      return {
        ...state
      }
  }
}