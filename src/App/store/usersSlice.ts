import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import IUser from '../interfaces/IUsers';
interface IUsersStoreSate{status:'loading'|'idle'|'failed',value:Array<IUser>} 
const initialState:IUsersStoreSate= {status:'idle',value:[{
  id:0,
  nick:'champix',
  fullName:'Alex champix',
  img:null,
  timeLastAction:new Date().toString()
},
{
  id:1,
  nick:'Alex',
  fullName:'Alexandre',
  img:null,
  timeLastAction:new Date().toString()
}]
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
      add:(state:IUsersStoreSate,action:{ payload: IUser; type: string; })=>{
          state.value.push(action.payload)
      },
      load:(state:IUsersStoreSate,action:{ payload: Array<IUser>; type: string; })=>{
        state.value=action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value =action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = 'failed';
      });
}});

export const getUsers=createAsyncThunk('users/hydrate',async()=>(await fetch('http://localhost:5679/users')).json())

export const {add,load} = usersSlice.actions

export default usersSlice.reducer