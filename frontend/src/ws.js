import { io } from 'socket.io-client';

export function connectWS() {
    return io('https://chat-app-k41z.onrender.com/');
}
