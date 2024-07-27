import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

let DetailsOfTasksComponent=(props)=>{
    let {tasks} = props
    let {name}=useParams();
    let [task,setTask]=useState(null)

    //se ejecuta siempre que se arracnca un componente
    useEffect(()=>{
        let findTask=tasks.find(t=>t.name==name)
        if(findTask!=null)
            setTask(findTask)
    })

    return(
        <div className="task-details">
            <h2>Details of Task</h2>
            <p>Name: {task?.name}</p>
            <p>Place: {task?.place}</p>
            <p>Priority: {task?.priority}</p>
        </div>
    )
}

export default DetailsOfTasksComponent;