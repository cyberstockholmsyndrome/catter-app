import React, { Component } from 'react';

import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cats: []
    };

    this.reloader = this.reloader.bind(this);
  }

  async reloader() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/cat');
      const cats = await res.json();
      this.setState({
        cats
      });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.reloader();
  }

  render() {
    const Kats = this.state.cats.map(cat => (
      
        <div key={cat.id}>
          <h1>Imię: {cat.name}</h1>
          <h2>Wiek: {cat.age}</h2>
          <h2>Rasa: {cat.race}</h2>
          <hr></hr>
          <span><b>Opis:</b> {cat.description}</span>
          <hr></hr>
        </div>
    ))
    
    return (
      <div>
        {Kats}
        <br/>
      <Form reloader={this.reloader}/>
      </div>
    );
  }
}

export default App;
