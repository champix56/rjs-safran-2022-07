import {  Stack } from "@mui/material";
import Box from '@mui/material/Box'
import { format } from "path";
import React, { useEffect, useState, useRef } from "react";
import IMessage from "../../../interfaces/IMessage";
import IUser, { DUMMY_USER } from "../../../interfaces/IUsers";
import TchatMessage from "../TchatMessage/TchatMessage";
import style from "./TchatMessages.module.css";
/**
 * interface du composant TchatMessages
 */
export interface ITchatMessagesProps {
  users: Array<IUser>;
  messages:Array<IMessage>
}


const TchatMessages: React.FC<ITchatMessagesProps> = (props) => {
  const ref:any = useRef(null)
  useEffect(() => {
    //console.log(typeof ref.current,ref.current);
   // if(ref.current){
    ref.current.scrollTop = ref.current.scrollHeight;
    //}
  }, [ref.current,props.messages])
  return (
    <Box className={style.TchatMessages} data-testid="TchatMessages" ref={ref}>
      
      <Stack spacing={2}>
      {props.messages.map((m) => {
        const currUser = props.users.find((u) => u.id === m.from);
        return (
          
          <TchatMessage
            key={"m" + m.id}
            message={m}
            user={
              currUser
                ? currUser
                : DUMMY_USER
            }
          />
        );
      })}
      </Stack>
    </Box>
  );
};

export default TchatMessages;
