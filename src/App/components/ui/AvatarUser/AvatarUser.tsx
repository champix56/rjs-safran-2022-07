import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import IUser from "../../../interfaces/IUsers";
import style from "./AvatarUser.module.css";
/**
 * interface du composant AvatarUser
 */
export interface IAvatarUserProps {user:IUser}

const AvatarUser: React.FC<IAvatarUserProps> = (props) => {
  
  return <div className={style.AvatarUser} data-testid="AvatarUser"><Avatar
  alt={props.user.fullName + " Sharp"}
  src={props.user.img ? props.user.img : undefined}
  sx={{ display: "inline", marginRight:'10px', height:70, width:70, padding:0.5 }}
>
  {props.user.nick.substring(0, 2)} 
</Avatar></div>;
};

export default AvatarUser;
