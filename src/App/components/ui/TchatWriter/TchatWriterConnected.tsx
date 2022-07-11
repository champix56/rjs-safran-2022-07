import React from 'react'
import { useSelector } from 'react-redux'
import TchatWriter from './TchatWriter'



export default function TchatWriterConnected() {
  const users=useSelector((s:any)=>s.users)
    return (
    <TchatWriter users={users}/>
  )
}