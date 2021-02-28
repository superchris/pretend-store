import LiveState from 'live-state';

const liveState = new LiveState("ws://localhost:4000/socket", "product_list:all");

export default liveState;
