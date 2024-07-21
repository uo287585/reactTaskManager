import './App.css';
import {useState,useRef,useEffect} from "react";

function App() {
  let [name,setName]=useState("")
  let [place,setPlace]=useState("")
  let [priority,setPriority]=useState(0)

  let nameRef = useRef("")
  let placeRef = useRef("")
  let priorityRef = useRef(0)

  let [tasks,setTasks] = useState([{name:"Task1",place:"School",priority:0},
    {name:"Clean",place:"House",priority:0}]) 

  let addTask=()=>{
    let newTask = {name:name,place:place,priority:priority}
    setTasks([...tasks,newTask])
    setName("")
    setPlace("")
    setPriority(0)
  }

  //las refs estan vinculadas con el estado de los inputs
  let addTasksWithRefs = () =>{
    let newTask = {name:nameRef.current.value,place:placeRef.current.value,priority:priorityRef.current.value}
    setTasks([...tasks,newTask])
    nameRef.current.value=""
    placeRef.current.value=""
    priorityRef.current.value=0
  }
  return ( 
    
      <div>
        <h2>Add task</h2>
        <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.currentTarget.value)}}></input>
        <input type="text" placeholder="place" value={place} onChange={(e)=>{setPlace(e.currentTarget.value)}}></input>
        <input type="number" placeholder="0" value={priority} onChange={(e)=>{setPriority(e.currentTarget.value)}}></input>
        <button onClick={addTask}>Add task</button>

        <h2>Add task</h2>
        <input ref={nameRef} type="text" placeholder="name"></input>
        <input ref={placeRef} type="text" placeholder="place"></input>
        <input ref={priorityRef} type="number" placeholder="0"></input>
        <button onClick={addTasksWithRefs}>Add task</button>
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
