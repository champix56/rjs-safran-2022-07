import { createSlice } from "@reduxjs/toolkit";
import IMessage from "../interfaces/IMessage";

const initialState: Array<IMessage> = [
  {
    id: 0,
    text: "Magna consectetur officia exercitation tempor non. Est anim aliqua proident nulla minim non voluptate magna cillum commodo veniam cupidatat proident. Dolore proident ipsum tempor nostrud veniam reprehenderit eiusmod anim ullamco duis. Commodo proident duis proident nisi. Enim nostrud culpa proident velit. Esse reprehenderit exercitation nisi nulla tempor et est nisi ea.Veniam anim exercitation reprehenderit magna non nulla. Velit amet reprehenderit fugiat pariatur labore labore dolore do irure ex. Velit cupidatat sint occaecat aliquip occaecat id ullamco sint consectetur velit. Voluptate nostrud proident qui nostrud sunt fugiat reprehenderit qui pariatur culpa do tempor.",
    from: 0,
    dt: new Date().toString(),
  },
  { id: 1, text: "message2", from: 1, dt: new Date().toString() },
];

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    load: (
      state: Array<IMessage>,
      action: { payload: Array<IMessage>; type: string }
    ) => {
      state.push(...action.payload);
    },
    add: (
      state: Array<IMessage>,
      action: { payload: IMessage; type: string }
    ) => {
      state.push(action.payload);
    },
  },
});

export const { add } = messageSlice.actions;

export default messageSlice.reducer;
