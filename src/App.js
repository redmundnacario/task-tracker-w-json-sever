import {useState, useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

import Header from './components/header/header.component';
import AddTaskForm from './components/add-task-form/add-task-form.component';
import TaskList from './components/tasks-list/task-list.component';
import Footer from './components/footer/footer.component';
import About from './components/about/about.component';


import './App.css'
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 0,
      name : "Do Laundry",
      day: "Monday",
      reminder: true
    },
    {
      id:1,
      name : "Do Grocery",
      day: "Tuesday",
      reminder: true
    },
    {
      id: 2,
      name : "Do Clean Shoes",
      day: "Wednesday",
      reminder: true
    }
  ])

  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])

  }

  // Delete Specific task
  const deleteTask = (id) => {
    setTasks(
      tasks.filter(task => task.id !== id)
    )
  }

  // Toggle the reminder boolean inside the task object
  const toggleReminder = (id) => {
    setTasks(
      tasks.map(task => {
        return task.id === id ? {...task, reminder : !task.reminder} : task
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
