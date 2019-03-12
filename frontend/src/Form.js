import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', age: '', race: '', description: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const {name, age, race, description} = this.state;
        const lead = { name, age, race, description };
        const endpoint = "http://localhost:8000/api/cat/";
        const config = {
            method: "post",
            body: JSON.stringify(lead),
            headers: new Headers({ "Content-Type": "application/json" })
        };
        fetch(endpoint, config);
        this.props.reloader();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Imię:
              <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
            </label>
            <label>
              Wiek:
              <input type="text" value={this.state.age} name="age" onChange={this.handleChange} />
            </label>
            <label>
              Rasa:
              <input type="text" value={this.state.race} name="race" onChange={this.handleChange} />
            </label>
            <label>
              Opis:
              <input type="text" value={this.state.description} name="description" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

export default Form;
