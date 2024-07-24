

let ListOfTasksComponent=(props)=>{
    let {setTasks,tasks,setTaskSelected}=props

    let onClickSelectedTask = (name) =>{
        let foundTask=tasks.find(t=>t.name==name)
        setTaskSelected(foundTask)
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
                <li key={t.name} onClick={()=>{onClickSelectedTask(t.name)}}>
                    <b>{t.name}</b>
                    <button className='delete-button' onClick = {()=>{onClickDeleteTask(t.name)}}>Delete</button>
                </li>)}
            </ul>
        </div>
    )
}

export default ListOfTasksComponent;