
import socket from './socket';

export const subscribeState = (channelName, onStateChange) => {
  const channel = socket.channel(channelName, {});
  channel.join().receive("ok", () => console.log('joined'));
  channel.on("state:change", (state) => onStateChange(state));
  return channel;
}

export const pushEvent = (channel, event: CustomEvent) => channel.push(event.type, event.detail);
