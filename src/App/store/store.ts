import { combineReducers, configureStore } from '@reduxjs/toolkit'
import messagesReducer, { getMessages } from './messagesSlice'
import usersReducer, { getUsers } from './usersSlice'
export const store = configureStore({
    reducer: combineReducers({
        messages: messagesReducer, users: usersReducer
    })
     
})
store.dispatch(getUsers())
store.dispatch(getMessages())