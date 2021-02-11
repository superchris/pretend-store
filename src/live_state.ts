export const subscribeState = (socket, channelName, onStateChange) => {
  const channel = socket.channel(channelName, {});
  channel.join().receive("ok", () => console.log('joined'));
  channel.on("state:change", (state) => onStateChange(state));
  return channel;
}

export const pushEvent = (channel, event: CustomEvent) => channel.push(`lvs_evt:${event.type}`, event.detail);
