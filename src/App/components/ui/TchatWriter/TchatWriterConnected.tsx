import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import IMessage from '../../../interfaces/IMessage'
import { add, sendMessages } from '../../../store/messagesSlice'
import { store } from '../../../store/store'
import TchatWriter from './TchatWriter'



export default function TchatWriterConnected() {
  const users=useSelector((s:any)=>s.users.value)  
  return (
    <TchatWriter users={users} onMesageSent={(message:IMessage)=>{
        store.dispatch(sendMessages(message))
    }}/>
  )
}