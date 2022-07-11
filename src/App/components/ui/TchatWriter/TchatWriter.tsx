import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";

import React, { useEffect, useState } from "react";
import IMessage from "../../../interfaces/IMessage";
import IUser from "../../../interfaces/IUsers";
import { add } from "../../../store/messagesSlice";
import FlexW from "../../layout/FlexW/FlexW";
import style from "./TchatWriter.module.css";
/**
 * interface du composant TchatWriter
 */
export interface ITchatWriterProps {
  users: Array<IUser>;
}
/**
 * etat initial des props du composant TchatWriter
 */
const tchatWriterInitialState: IMessage = {
  text: "",
  to: -1,
  from: 0,
  dt: new Date(0).toString(),
};
const TchatWriter: React.FC<ITchatWriterProps> = (props) => {
  const [state, setstate] = useState(tchatWriterInitialState);

  return (
    <Box className={style.TchatWriter} data-testid="TchatWriter">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          console.log("submited");
        }}
      >
        <FlexW>
          <FormControl>
            <TextField
              id="standard-basic"
              variant="standard"
              className={style.messageField}
              sx={{ height: 45 }}
              value={state.text}
              onChange={(evt) => setstate({ ...state, text: evt.target.value })}
            />
          </FormControl>
          <FormControl>
            <Select
              id="demo-simple-select"
              className={style.userSelect}
              value={state.to}
              sx={{ height: 30 }}
              onChange={(evt) => {
                setstate({
                  ...state,
                  to:
                    Number(evt.target.value) >= 0
                      ? Number(evt.target.value)
                      : undefined,
                });
              }}
            >
              <MenuItem key={"suall"} value={-1}>
                All
              </MenuItem>
              {props.users.map((u) => (
                <MenuItem key={"su" + u.id} value={u.id}>
                  {u.nick}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" type="submit" sx={{ height: 30 }}>
            send
          </Button>
        </FlexW>
      </form>
    </Box>
  );
};

export default TchatWriter;
