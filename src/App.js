import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

//68f4bec107164e3584b98c2c6cac958e

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    );
  }
}
