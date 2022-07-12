import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {UserContext} from './contexts/context';
import "./App.css";
import Tchat from "./components/ui/Tchat/Tchat";
import { getSocketMessages } from "./store/socket";
function App(props:{userid:number}) {
  return (
    <div className="App">
      <UserContext.Provider value={{id:props.userid}}>
        <Tchat/>
      </UserContext.Provider>
    </div>
    
  );
}
App.defaultProps={userid:0}
export default App;
