import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from './chatAPI';

const initialState = {
  messages: [{ key: 1, sender: "_SYSTEM", msg: "Welcome to chat" }],
  status: "idle",
  loggedUsers: [],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const incrementAsync = createAsyncThunk(
//   'chat/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    postMessage: (state, action) => {
      const { msg } = action.payload;

      const msgToAppend = Object.assign(
        { key: new Date() * 1, sender: "Player" },
        { msg }
      );

      state.messages = [
        ...state.messages,
        msgToAppend,
      ];
    },
  },
});

export const { postMessage } = chatSlice.actions;
export const selectMessages = (state) => state.chat.messages;

export default chatSlice.reducer;
