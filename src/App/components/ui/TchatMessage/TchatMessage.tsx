import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import IMessage from "../../../interfaces/IMessage";
import IUser from "../../../interfaces/IUsers";
import AvatarUser from "../AvatarUser/AvatarUser";
import style from "./TchatMessage.module.css";
/**
 * interface du composant TchatMessage
 */
export interface ITchatMessageProps {
  message: IMessage;
  user: IUser;
}

const TchatMessage: React.FC<ITchatMessageProps> = (props) => {
  return (
    <div className={style.TchatMessage} data-testid="TchatMessage">
      <div className={style.header}>
        <AvatarUser user={props.user} />
        <div style={{ fontStyle: "italic", marginTop:'8px' }}>
          <Moment format="YYYY/MM/DD HH:mm:ss">{props.message.dt}</Moment>
        </div>
        : </div><div className={style.textMessage}>{props.message.text}</div>
    </div>
  );
};

export default TchatMessage;
