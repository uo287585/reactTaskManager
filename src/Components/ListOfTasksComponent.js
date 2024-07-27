import { Link, useNavigate } from "react-router-dom"

let ListOfTasksComponent=(props)=>{
    let {setTasks,tasks}=props
    let navigate = useNavigate();

    let onClickSelectedTask = (name) =>{
        
        navigate("/detailsTask/"+name)
    }

    let onClickDeleteTask = (name) =>{
        let others = tasks.filter(t=>t.name!=name)
        setTasks(others)
    }

    return(
        <div>
            <h1>List of tasks</h1>
            <ul className='task-list'>
                {tasks.map(t=>
                <li key={t.name} >
                    <Link to={"/detailsTask/"+t.name}>
                    {t.name}
                    </Link>
                    <button className='delete-button' onClick = {()=>{onClickDeleteTask(t.name)}}>Delete</button>
                </li>)}
            </ul>
        </div>
    )
}

export default ListOfTasksComponent;