import {useState, useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import AddTaskForm from './components/add-task-form/add-task-form.component';
import TaskList from './components/tasks-list/task-list.component';
import Footer from './components/footer/footer.component';
import About from './components/about/about.component';

import './App.css'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async() => {
      const tasks_ = await GetTasks()
      console.log(tasks_)
      setTasks(tasks_)
    }

    fetchTasks()
    // dependency array - run after commands inside useEffect
  }, [])

  const GetSingleTask = async(id) =>{
    return await fetch(`http://localhost:4001/tasks/${id}`)
      .then(response => response.json())
      .then(result => result)
  }
  

  // GEt tasks in dB
  const GetTasks = async() => {
    return await fetch("http://localhost:4001/tasks")
      .then(response => response.json())
      .then(result => result)
  }

  // Add task to DB
  const addTask = async(task) => {
    const result = await fetch('http://localhost:4001/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await result.json()

    setTasks([...tasks, data])
  }

  // Delete Specific task
  const deleteTask = async(id) => {
    const result = await fetch(`http://localhost:4001/tasks/${id}`, {
      method: 'DELETE'
    })

    result.status === 200 
      ? setTasks(tasks.filter(task => task.id !== id))
      : alert('Error Deleting This Task')
  }

  // Toggle the reminder boolean inside the task object
  const toggleReminder = async(id) => {
    const taskToUpdate = await GetSingleTask(id)
    const updatedTask = {...taskToUpdate, reminder: !taskToUpdate.reminder}
    const result = await fetch(`http://localhost:4001/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })

    const data = await result.json()

    setTasks(
      tasks.map(task => {
        return task.id === id ? {...task, reminder : data.reminder} : task
      })
    )
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          onToggle = {() => setShowAddTask(!showAddTask)}
          showAddTask = {showAddTask}
        />
        <Route
          path = "/task-tracker"
          // exact
          render ={ (props) => (
            <div>
              {
                showAddTask && <AddTaskForm onAdd={addTask}/>
              }
                
              <TaskList 
                tasks={tasks}
                onToggle={toggleReminder}
                onDelete={deleteTask}
              />
            </div>
        )}
        />
        <Route path="/about" component={About} exact/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
