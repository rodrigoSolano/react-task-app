import React, { Component } from 'react'

export default class Task extends Component {

  styleSuccess = () => {
    return {
      textDecoration: this.props.task.done ? "line-through" : "none",
      color: this.props.task.done ? 'gray' : 'white',
    }
  }

  render() {
    const { title, description, done, id } = this.props.task;
    const { completeTask, deleteTask, task } = this.props;
    let buttonComplete;
    if (done) {
      buttonComplete = <button type="button" class="btn btn-success invisible" >COMPLETE</button>;
    } else {
      buttonComplete = <button type="button" class="btn btn-success" onClick={completeTask.bind(this, id)}>COMPLETE</button>;
    }

    return (
      <div className="container-fluid p-3 border border-2 border-top-0 border-end-0 border-start-0">
        <div className="row">
          <div className="col-md-10 ">
            <div className=" d-flex flex-column align-items-start">
              <h2 className="fs-1 text-warning" style={this.styleSuccess()}>
                {title}
              </h2>
              <p style={this.styleSuccess()}>
                {description}
              </p>
            </div>
          </div>
          <div className="col-md-2 d-flex align-items-center justify-content-between">
            {buttonComplete}
            <button type="button" class="btn btn-danger" onClick={deleteTask.bind(this, id)} >DELETE</button>
          </div>
        </div>
      </div>
    )
  }
}
