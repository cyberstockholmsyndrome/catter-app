import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import CatList from "./CatList";
import About from "./About";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <br />
          <Route exact path="/" component={CatList} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
