import './App.css';
import {useState,useRef,useEffect} from "react";
import DetailsOfTasksComponent from './Components/DetailsOfTasksComponent';
import ListOfTasksComponent from './Components/ListOfTasksComponent';
import CreateTaskComponent from './Components/CreateTaskComponent';
import {Route, Routes,Link} from 'react-router-dom';

function App() {
  let [taskSelected,setTaskSelected]=useState({})

  let [tasks,setTasks] = useState([{name:"Task1",place:"School",priority:0},
    {name:"Clean",place:"House",priority:0}]) 

  

  return ( 
      <div className='container'>
        <h1>My Task Manager</h1>
        <nav>
          <ul className='navbar'>
            <li><Link to="/">Tasks</Link></li>
            <li><Link to="/createTask">Create Task</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ListOfTasksComponent setTasks={setTasks} tasks={tasks} setTaskSelected={setTaskSelected}/>}></Route>
          <Route path="/createTask" element={<CreateTaskComponent setTasks={setTasks} tasks={tasks}/>}></Route>
          <Route path="/detailsTask" element={<DetailsOfTasksComponent task={taskSelected}/>}></Route>
        </Routes>
        
      </div>
  );
}

export default App;
