import socketIOClient from 'socket.io-client';

/**
 * Socket connection
 */
export const socket = socketIOClient(process.env.REACT_APP_SOCKET_URL_LOCALHOST);
//export const socket = socketIOClient(process.env.REACT_APP_SOCKET_URL_DEPLOY_CLIENT);

/**
 * Disconnect to the socket server
 */
export const disconnectSocket = () => {
    socket.disconnect();
}

