import React from "react";
import List from "./List";
import { getInitialData } from "../utils/data";
import Input from "./Input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  onAddContactHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            title,
            createdAt: new Date().toDateString(),
            body,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="contact-app">
        <center><h1>APP NOTE</h1>
        <h2>Tambah Catatan</h2>
        </center>
        <Input addContact={this.onAddContactHandler} />
        <List
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default App;
