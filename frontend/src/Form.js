import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form className="ml-4 mr-4">
        <div className="form-group">
          <label for="imie">Imię:</label>
          <input
            type="text"
            className="form-control mb-2"
            value={this.props.formText.name}
            name="name"
            onChange={this.props.onChange}
            id="imie"
          />
        </div>
        <div className="form-group">
          <label for="wiek">Wiek:</label>
          <input
            type="text"
            className="form-control mb-2"
            value={this.props.formText.age}
            name="age"
            onChange={this.props.onChange}
            id="wiek"
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
            id="rasa"
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
            id="opis"
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
