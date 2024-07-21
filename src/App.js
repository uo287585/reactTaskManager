import './App.css';
import {useState,useRef,useEffect} from "react";

function App() {
  let [task,setTask] = useState([{name:"Task1",place:"School",priority:0},
    {name:"Clean",place:"House",priority:0}]) 
  return ( 
    <>
      <div>
        {task.map(t=><li>
          <b>{t.name}</b>
          <div>Priority: {t.priority}</div>
          <div>{t.place}</div>
          </li>)}
      </div>
    </>
  );
}

export default App;
