import { combineReducers, configureStore } from '@reduxjs/toolkit'
import messagesReducer from './messagesSlice'
import usersReducer from './usersSlice'
export const store = configureStore({
    reducer: combineReducers({
        messages: messagesReducer, users: usersReducer
    })
})