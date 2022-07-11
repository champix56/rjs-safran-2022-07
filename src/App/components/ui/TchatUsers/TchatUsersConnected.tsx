import React from 'react'
import { useSelector } from 'react-redux'
import TchatUsers from './TchatUsers'

export default function TchatUsersConnected() {
  const users=useSelector((s:any)=>s.users)
  return <TchatUsers users={users}/>
}