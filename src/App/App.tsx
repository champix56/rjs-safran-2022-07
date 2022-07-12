import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { messagesSocket } from "./api/socket";
import "./App.css";
import Tchat from "./components/ui/Tchat/Tchat";

function App() {
  return (
    <div className="App">
      <Tchat/>
    </div>
    
  );
}

export default App;
