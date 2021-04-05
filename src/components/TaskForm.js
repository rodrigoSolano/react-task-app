import React, { Component } from "react";

import "../styles/styles.css";

export default class TaskForm extends Component {

  state = {
    title: "",
    description: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.title, this.state.description);
    this.setState({
      title: "",
      description: "",
    });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form className="TaskForm p-3" onSubmit={this.onSubmit}>
        <div className="container">
          <div className="row">
			  
            <div className="col-sm">
              <label
                className="text-white form-label d-flex justify-content-start"
                htmlFor="title"
              >
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            
			<div className="col-sm">
              <label
                className="text-white form-label d-flex justify-content-start"
                htmlFor="description"
              >
                Descripcion
              </label>
              <input
                type="text"
                className="form-control"
                name="description"
                onChange={this.onChange}
                value={this.state.description}
              />
            </div>
          
		    <div className="col-sm d-flex align-items-end justify-content-end">
              <button type="submit" className="btn btn-warning mt-3">
                AGREGAR TAREA
              </button>
            </div>
          
		  </div>
        </div>
      </form>
    );
  }
}
