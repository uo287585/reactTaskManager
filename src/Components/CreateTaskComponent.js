import { useState } from "react"
import { useNavigate } from "react-router-dom"

let CreateTaskComponent = (props) => {
    let {setTasks,tasks} = props
    let [name,setName]=useState("")
  let [place,setPlace]=useState("")
  let [priority,setPriority]=useState(0)
  let navigate = useNavigate();
    let addTask=()=>{
        let newTask = {name:name,place:place,priority:priority}
        setTasks([...tasks,newTask])
        setName("")
        setPlace("")
        setPriority(0)
        navigate("/")
      }
    
    return (
        <div className='task-form'>
            <h2>Add task</h2>
            <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.currentTarget.value)}}></input>
            <input type="text" placeholder="place" value={place} onChange={(e)=>{setPlace(e.currentTarget.value)}}></input>
            <input type="number" placeholder="0" value={priority} onChange={(e)=>{setPriority(e.currentTarget.value)}}></input>
            <button onClick={addTask}>Add task</button>
        </div>
    )

}

export default CreateTaskComponent