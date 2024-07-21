import './App.css';
import {useState,useRef,useEffect} from "react";

function App() {
  let [name,setName]=useState("")
  let [place,setPlace]=useState("")
  let [priority,setPriority]=useState(0)

  let [tasks,setTasks] = useState([{name:"Task1",place:"School",priority:0},
    {name:"Clean",place:"House",priority:0}]) 

  let addTask=()=>{
    let newTask = {name:name,place:place,priority:priority}
    setTasks([...tasks,newTask])
  }
  return ( 
    
      <div>
        <h2>Add task</h2>
        <input type="text" placeholder="name" onChange={(e)=>{setName(e.currentTarget.value)}}></input>
        <input type="text" placeholder="place" onChange={(e)=>{setPlace(e.currentTarget.value)}}></input>
        <input type="number" placeholder="0" onChange={(e)=>{setPriority(e.currentTarget.value)}}></input>
        <button onClick={addTask}>Add task</button>
        <ul>
          {tasks.map(t=><li>
            <b>{t.name}</b>
            <div>Priority: {t.priority}</div>
            <div>{t.place}</div>
            </li>)}
        </ul>
      </div>
    
  );
}

export default App;
