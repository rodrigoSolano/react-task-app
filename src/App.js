import React, { Component } from 'react'
import TaskForm from './components/TaskForm.js'
import Tasks from './components/Tasks.js'

class App extends Component {

  state = {
    tasks: [
      {
        id: 0,
        title: "Tarea 1",
        description: "Esta es la tarea a realizar numero 1",
        done: true
      },
      {
        id: 1,
        title: "Tarea 2",
        description: "Esta es la tarea a realizar numero 2",
        done: false
      }
    ]
  }

  addTask = (title, description) => {
    const newTask = {
      title,
      description,
      id: this.state.tasks.length,
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTasks
    })
  }

  completeTask = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    })

    this.setState({ tasks: newTasks })
  }

  render() {
    return (
      <div className="m-5 text-center">

        <h1 className="text-white">Lista de tareas</h1>

        <TaskForm addTask={this.addTask} />
		
        <Tasks
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          completeTask={this.completeTask}
        />

      </div>
    )
  }
}

export default App;