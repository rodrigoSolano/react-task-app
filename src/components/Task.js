import React, { Component } from "react";

export default class Task extends Component {
  styleSuccess = () => {
    return {
      textDecoration: this.props.task.done ? "line-through" : "none",
      color: this.props.task.done ? "gray" : "white",
    };
  };

  visibleOrInvisibleClass = () => {
    if (this.props.task.done) {
      return "btn btn-success invisible";
    }
    return "btn btn-success";
  };

  render() {
    const { title, description, id } = this.props.task;
    const { completeTask, deleteTask } = this.props;

    return (
      <div className="container-fluid p-3 border border-2 border-top-0 border-end-0 border-start-0">
        <div className="row">
          <div className="col">

            {/**Titulo y description de la tarea */}
            <div className="d-flex    flex-column      align-items-start">
              <h2 className="fs-1 text-warning" style={this.styleSuccess()}>
                {title}
              </h2>
              <p style={this.styleSuccess()}>{description}</p>
            </div>

            {/**Botones de eliminar y completar tarea */}
            <div className="d-flex     align-items-center       justify-content-between       justify-content-md-end ">
              <button
                type="button"
                className={this.visibleOrInvisibleClass()}
                onClick={completeTask.bind(this, id)}
              >
                COMPLETAR
              </button>

              <button
                type="button"
                className="btn btn-danger  ms-md-2 "
                onClick={deleteTask.bind(this, id)}
              >
                BORRAR
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
