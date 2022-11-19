import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Name (Max 30 Character)"
          value={this.state.title}
          onChange={this.onNameChangeEventHandler}
          required
          maxLength={30}
        />
        <input
          type="text"
          placeholder="About"
          value={this.state.body}
          onChange={this.onTagChangeEventHandler}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Input;
