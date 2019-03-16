import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
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
        </div>
      </div>
    );
  }
}

export default About;
