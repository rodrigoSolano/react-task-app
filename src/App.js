import React, { Component } from 'react'
import TaskForm from './components/TaskForm.js'
import Tasks from './components/Tasks.js'

class App extends Component {

  state = {
    tasks: [
      {
        id: 0,
        title: "Task 1",
        description: "This is my task one",
        done: true
      },
      {
        id: 1,
        title: "Task 1",
        description: "This is my task one",
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
        <h1 className="text-white">My Todos</h1>
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