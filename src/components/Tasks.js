import React, { Component } from 'react'
import '../styles/styles.css'

import Task from './Task.js'

export default class Tasks extends Component {
  render() {
    const { deleteTask, completeTask, tasks } = this.props

    return (
      <div className="Tasks mt-3">
        {tasks.map(task => {
          return <Task key={task.id} task={task} completeTask={completeTask} deleteTask={deleteTask} />
        })}
      </div>
    )
  }
}
