import { createSlice } from '@reduxjs/toolkit'
import IUser from '../interfaces/IUsers';

const initialState:Array<IUser> = [{
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

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
      add:(state:Array<IUser>,action:{ payload: IUser; type: string; })=>{
          state.push(action.payload)
      },
      load:(state:Array<IUser>,action:{ payload: Array<IUser>; type: string; })=>{
        state.push(...action.payload)
    }
  }
});

export const {add,load} = usersSlice.actions

export default usersSlice.reducer