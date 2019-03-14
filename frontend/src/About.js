import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="ml-4">
        <h1>Catter App</h1>
        <br />
        <p>
          Website with Cat database.
          <br />
          <br />
          Backend: Django with Django REST Framework
          <br />
          Frontend: React
        </p>
      </div>
    );
  }
}

export default About;
