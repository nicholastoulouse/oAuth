import React, { Component } from 'react';
import logo from './logo.svg';
import CssModules from 'react-css-modules';
import styles from './App.css';
import Load from './components/loadSomething/Load';

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <header styleName="App-header">
          <img src={logo} styleName="App-logo" alt="logo" />
          <h1 styleName="App-title">Welcome to React</h1>
        </header>
        <p styleName="App-intro">
          To get started, change <code>src/App.js</code> and save to reload!!
        </p>
        <Load />
      </div>
    );
  }
}

export default CssModules(App, styles);
