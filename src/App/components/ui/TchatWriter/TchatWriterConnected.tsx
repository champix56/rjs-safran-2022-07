import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import IMessage from '../../../interfaces/IMessage'
import { add } from '../../../store/messagesSlice'
import TchatWriter from './TchatWriter'



export default function TchatWriterConnected() {
  const users=useSelector((s:any)=>s.users)
  const d=useDispatch();  
  return (
    <TchatWriter users={users} onMesageSent={(message:IMessage)=>{
        d(add(message))
    }}/>
  )
}