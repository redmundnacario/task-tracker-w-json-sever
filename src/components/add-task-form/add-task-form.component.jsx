import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button';

const AddTaskForm = ({ onAdd }) => {
    const [task, setTask] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const submitAddForm = (event) => {
        event.preventDefault()
        // console.log("add form")
        
        if (task === ""){
            alert("Please fill needed inputs")
            return
        }
        // Send variables as object in add function
        onAdd({
            name: task,
            day,
            reminder
        })

        // reset values
        setTask('')
        setDay('')
        setReminder(false)
    }
    return (
        <form 
            className="add-form"
            onSubmit={submitAddForm}
        >
            <FormInput
                className=""
                label="Name"
                type="text"
                placeholder="Sample Activity"
                value={task}
                onChange={(event) => setTask(event.target.value)}
            />
            <FormInput
                className=""
                label="Day"
                type="text"
                placeholder="Name of a Day"
                value={day}
                onChange={(event) => setDay(event.target.value)}
            />
            <FormInput
                className="form-control-check"
                label="Set Reminder"
                type="checkbox"
                checked={reminder}
                value={reminder}
                onChange={(event) => setReminder(event.target.checked)}
            />
            <Button 
                className="form-control-button"
                backgroundColor = "Green"
                text = "Add Task"
                onClick = {null}/>
        </form>
    )
}

export default AddTaskForm
