import { Socket } from 'phoenix';

const socket = new Socket("ws://localhost:4000/socket", { logger: ((kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }) });
socket.connect();

export default socket;
