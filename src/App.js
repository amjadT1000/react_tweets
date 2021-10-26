import React from "react";
import logo from "./logo.svg";
import "./App.css";

class HelloMessage extends React.Component {
  render() {
    return (
      <div className="main">
        <header>
          <img src={this.props.image} />
          <h2>@{this.props.title}</h2>
        </header>
        <section>
          <h4>Tweet:</h4>
          <p>{this.props.dec}</p>
        </section>
      </div>
    );
  }
}

export default HelloMessage;
