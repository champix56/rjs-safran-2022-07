import { createSlice } from "@reduxjs/toolkit";
import { closeSocket, openSocket, socketMessageHydrateLoader, socketSendMessage } from "../api/socket";
const socketUrl = "ws://localhost:8080";
let messagesSocket: WebSocket | null = null;
interface ISocketStoreState {
  wsState: "close" | "openning" | "open" | "closing";
}
const initialState = {
  wsState: "close",
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    load: (state: ISocketStoreState) => {
      if (state.wsState === "open" && messagesSocket !== null) {
       socketMessageHydrateLoader()
      }
    },
    open: (state: ISocketStoreState) => {
      openSocket();
      state.wsState = "openning";
    },
    opened: (state: ISocketStoreState) => {
      state.wsState = "open";
    },
    close: (state: ISocketStoreState) => {
        closeSocket();
      state.wsState = "closing";
    },
    closed: (state: ISocketStoreState) => {
      messagesSocket = null;
      state.wsState = "close";
    },
  },
});


export const { open, opened, close, closed, load } = socketSlice.actions;

export default socketSlice.reducer;
