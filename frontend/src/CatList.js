import React, { Component } from "react";

import Form from "./Form";
import DeleteButton from "./DeleteButton";

class CatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      formText: { name: "", age: "", race: "", description: "", imageUrl: null }
    };

    this.refresher = this.refresher.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  refresher() {
    try {
      fetch("http://localhost:8000/api/cat/")
        .then(res => res.json())
        .then(cats => this.setState({ cats }));
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.refresher();
  }

  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  uploadHandler = () => {
    console.log(this.state.selectedFile);
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      formText: {
        ...prevState.formText,
        [name]: value
      }
    }));
  }

  async handleAdd(event) {
    event.preventDefault();

    const endpoint = "http://localhost:8000/api/cat/";
    const photo = this.state.selectedFile;

    const formData = new FormData();
    formData.append("name", this.state.formText.name);
    formData.append("age", this.state.formText.age);
    formData.append("race", this.state.formText.race);
    formData.append("description", this.state.formText.description);
    formData.append("imageUrl", photo);

    const config = {
      method: "post",
      body: formData
    };
    await fetch(endpoint, config);
    await this.refresher();
  }

  handleDelete = catId => {
    try {
      const endpoint = "http://localhost:8000/api/cat/" + catId;
      const config = {
        method: "delete",
        body: "",
        headers: new Headers({ "Content-Type": "application/json" })
      };
      fetch(endpoint, config);
      const cats = this.state.cats.filter(cat => cat.id !== catId);
      this.setState({ cats });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const Kats = this.state.cats.map(cat => (
      <div key={cat.id}>
        <h1>Imię: {cat.name}</h1>
        <h2>Wiek: {cat.age}</h2>
        <h2>Rasa: {cat.race}</h2>
        <br />
        <img src={cat.imageUrl} className="img-fluid" alt="Cat" />
        <span>
          <b>Opis:</b> {cat.description}
        </span>
        <hr />
        <DeleteButton id={cat.id} onDelete={this.handleDelete} />
      </div>
    ));

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 col-md-6 col-lg-4 col-xl-3">
            <Form
              onAdd={this.handleAdd}
              onChange={this.handleChange}
              formText={this.state.formText}
              fileChangedHandler={this.fileChangedHandler}
            />
            <br />
            {Kats}
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default CatList;
