import './App.css';
import {useState,useRef,useEffect} from "react";
import DetailsOfTasksComponent from './Components/DetailsOfTasksComponent';
import ListOfTasksComponent from './Components/ListOfTasksComponent';
import CreateTaskComponent from './Components/CreateTaskComponent';

function App() {
  let [taskSelected,setTaskSelected]=useState({})

  let [tasks,setTasks] = useState([{name:"Task1",place:"School",priority:0},
    {name:"Clean",place:"House",priority:0}]) 

  

  return ( 
      <div className='container'>
        <ListOfTasksComponent tasks={tasks} setTaskSelected={setTaskSelected}/>
        
        <CreateTaskComponent setTasks={setTasks} tasks={tasks}/>

        <DetailsOfTasksComponent task={taskSelected}/>
      </div>
  );
}

export default App;
