import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <label>
          Imię:
          <input
            type="text"
            value={this.props.formText.name}
            name="name"
            onChange={this.props.onChange}
          />
        </label>
        <label>
          Wiek:
          <input
            type="text"
            value={this.props.formText.age}
            name="age"
            onChange={this.props.onChange}
          />
        </label>
        <label>
          Rasa:
          <input
            type="text"
            value={this.props.formText.race}
            name="race"
            onChange={this.props.onChange}
          />
        </label>
        <label>
          Opis:
          <input
            type="text"
            value={this.props.formText.description}
            name="description"
            onChange={this.props.onChange}
          />
        </label>
        <button onClick={this.props.onAdd}>Dodaj</button>
      </form>
    );
  }
}

export default Form;
