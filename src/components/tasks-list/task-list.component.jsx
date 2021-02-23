import Task from '../task/task.component';

const TaskList = ({tasks, onDelete, onToggle}) => {
    return (
        <div className="task-list">
            {
                tasks.length ? 
                    tasks.map(task => (
                        <Task  
                            key={task.id}  
                            task={task}
                            onToggle={onToggle}
                            onDelete={onDelete}
                        />
                    ))

                : <h3>No Tasks to show.</h3>
    
            }
        </div>
    )
}

export default TaskList
