import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IMessage from "../interfaces/IMessage";
interface IMessageStoreState {
  status: "pending" | "idle" | "failed";
  value: Array<IMessage>;
}
const initialState: IMessageStoreState = {
  status: "idle",
  value: [
    {
      id: 0,
      text: "Magna consectetur officia exercitation tempor non. Est anim aliqua proident nulla minim non voluptate magna cillum commodo veniam cupidatat proident. Dolore proident ipsum tempor nostrud veniam reprehenderit eiusmod anim ullamco duis. Commodo proident duis proident nisi. Enim nostrud culpa proident velit. Esse reprehenderit exercitation nisi nulla tempor et est nisi ea.Veniam anim exercitation reprehenderit magna non nulla. Velit amet reprehenderit fugiat pariatur labore labore dolore do irure ex. Velit cupidatat sint occaecat aliquip occaecat id ullamco sint consectetur velit. Voluptate nostrud proident qui nostrud sunt fugiat reprehenderit qui pariatur culpa do tempor.",
      from: 0,
      dt: new Date().toString(),
    },
    { id: 1, text: "message2", from: 1, dt: new Date().toString() },
  ],
};
export const getMessages = createAsyncThunk("messages/hydrate", async () =>
  (await fetch("http://localhost:5679/messages")).json()
);
export const sendMessages = createAsyncThunk(
  "messages/send",
  async (message: IMessage) =>
    (
      await fetch("http://localhost:5679/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(message)
      })
    ).json()
);
const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    add: (
      state: IMessageStoreState,
      action: { payload: IMessage; type: string }
    ) => {
      state.value.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMessages.pending, (state: IMessageStoreState) => {
      state.status = "pending";
    });
    builder.addCase(
      getMessages.fulfilled,
      (state: IMessageStoreState, action) => {
        state.status = "idle";
        state.value = action.payload;
      }
    );
    builder.addCase(getMessages.rejected, (state: IMessageStoreState) => {
      state.status = "failed";
    });

    builder.addCase(sendMessages.pending, (state: IMessageStoreState) => {
      state.status = "pending";
    });
    builder.addCase(
      sendMessages.fulfilled,
      (state: IMessageStoreState, action) => {
        state.status = "idle";
        state.value.push(action.payload);
      }
    );
    builder.addCase(sendMessages.rejected, (state: IMessageStoreState) => {
      state.status = "failed";
    });
  },
});

export const { add } = messageSlice.actions;

export default messageSlice.reducer;
