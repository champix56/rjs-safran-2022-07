import { useSelector } from 'react-redux'
import IMessage from '../../../interfaces/IMessage'
import IUser from '../../../interfaces/IUsers'
import TchatMessages from './TchatMessages'
import TchatMessage from './TchatMessages'

const TchatMessagesConnected=()=>{
    const state:{messages:Array<IMessage>,users:Array<IUser>}=useSelector((s:any)=>({messages:s.messages,users:s.users}))
    return <TchatMessages messages={state.messages} users={state.users}/>
}
export default TchatMessagesConnected