import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form className="ml-4 mr-4">
        <div className="form-group">
          <label>Imię:</label>
          <input
            type="text"
            className="form-control mb-2"
            value={this.props.formText.name}
            name="name"
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group">
          <label>Wiek:</label>
          <input
            type="text"
            className="form-control mb-2"
            value={this.props.formText.age}
            name="age"
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group">
          <label>Rasa:</label>
          <input
            type="text"
            className="form-control mb-2"
            value={this.props.formText.race}
            name="race"
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group">
          <label>Opis:</label>
          <input
            type="text"
            className="form-control mb-2"
            value={this.props.formText.description}
            name="description"
            onChange={this.props.onChange}
          />
        </div>

        <div className="">
          <button
            type="Submit"
            onClick={this.props.onAdd}
            className="btn btn-primary mb-2 dodaj"
          >
            Dodaj
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
