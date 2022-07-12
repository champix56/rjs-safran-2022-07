import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IMessage from "../interfaces/IMessage";
import {load,add} from '../store/messagesSlice'
import { store } from "./store";
const socketUrl = "ws://localhost:8080";
let server: WebSocket = new WebSocket(socketUrl);
server.onopen = function (ev) {
    getSocketMessages()
};
server.onerror = function (err) {};
server.onmessage=function(ev){
    console.log(ev.data);
    const recievedContent=JSON.parse(ev.data).data;
    if(Array.isArray(recievedContent)){
        store.dispatch(load(recievedContent))
    }
    else{
        store.dispatch(add(recievedContent))
    }
}
export const getSocketMessages=()=>{
    server.send(JSON.stringify({type: 'read', path: 'messages'}))
}
export const sendSocketMessages=(message:IMessage)=>{
    server.send(JSON.stringify({type: 'create', path: 'messages',data:message}))
}