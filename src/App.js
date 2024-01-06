import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#ff0018'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
