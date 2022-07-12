import IMessage from "../interfaces/IMessage";
import { add, load } from "../store/messagesSlice";
import { load as socketLoad, open, opened } from "../store/socketSlice";
import { store } from "../store/store";

const socketUrl = "ws://localhost:8080";
let messagesSocket: WebSocket | null = null;

export const openSocket = () => {
  messagesSocket = new WebSocket(socketUrl);
  messagesSocket.onopen = onSocketopen;
  messagesSocket.onmessage = readSocketMessage;
  messagesSocket.onclose = onSocketclose;
};
export const closeSocket = () => {
  messagesSocket?.close();
};
// Listen connection events.
const onSocketopen = (ev: Event) => {
  console.log("Socket opened: ", ev);
  store.dispatch(opened());
};
const readSocketMessage = (m: MessageEvent<any>) => {
  let message = JSON.parse(m.data);
  if (Array.isArray(message)) {
    store.dispatch(load(message));
  } else {
    store.dispatch(add(message));
  }
  console.trace("Message: ", message, m);
};
const onSocketclose = (ev: CloseEvent) => {
  console.log("Socket closed: ", ev);
};
//socket actions
export const socketSendMessage = (message: IMessage) => {
  messagesSocket?.send(
    JSON.stringify({ type: "create", path: "messages", data: message })
  );
};
export const socketMessageHydrateLoader = () => {
  messagesSocket?.send(JSON.stringify({ type: "read", path: "messages" }));
};
