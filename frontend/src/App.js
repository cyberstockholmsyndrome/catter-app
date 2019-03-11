import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cats: []
    };
  }

  async componentDidMount() {
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

  render() {
    const Kats = this.state.cats.map(cat => (
      <body>
        <div key={cat.id}>
          <h1>Imię: {cat.name}</h1>
          <h2>Wiek: {cat.age}</h2>
          <h2>Rasa: {cat.race}</h2>
          <hr></hr>
          <span><b>Opis:</b> {cat.description}</span>
        </div>
      </body>
    ))
    
    return (
      <div>
        {Kats}
      </div>
    );
  }
}

export default App;
