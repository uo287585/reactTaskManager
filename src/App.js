import './App.css';
import {useState,useRef,useEffect} from "react";

function App() {
  let [name,setName]=useState("")
  let [place,setPlace]=useState("")
  let [priority,setPriority]=useState(0)

  let nameRef = useRef("")
  let placeRef = useRef("")
  let priorityRef = useRef(0)

  let formRef = useRef()

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

  let addTasksWithFormRefs = () =>{
    let formData = new FormData(formRef.current)

    let newTask = {name:formData.get("name"),place:formData.get("place"),priority:formData.get("priority")}
    setTasks([...tasks,newTask])
  }

  return ( 
    
      <div>
        <h2>Add task</h2>
        <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.currentTarget.value)}}></input>
        <input type="text" placeholder="place" value={place} onChange={(e)=>{setPlace(e.currentTarget.value)}}></input>
        <input type="number" placeholder="0" value={priority} onChange={(e)=>{setPriority(e.currentTarget.value)}}></input>
        <button onClick={addTask}>Add task</button>

        <h2>Add task ref</h2>
        <input ref={nameRef} type="text" placeholder="name"></input>
        <input ref={placeRef} type="text" placeholder="place"></input>
        <input ref={priorityRef} type="number" placeholder="0"></input>
        <button onClick={addTasksWithRefs}>Add task</button>

        <h2>Add task form ref</h2>
        <form ref={formRef}>
          <input name="name" type="text" placeholder="name"></input>
          <input type="text" name="place"  placeholder="place"></input>
          <input type="number" name="priority" placeholder="0"></input>
        </form>
        <button onClick={addTasksWithFormRefs}>Add task</button>
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
