// import a libraty to help create a component
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';
// create a component
export default class App extends Component {
  render() {
    return (
      <Header/>
    );
  }
}
// render it to the device
AppRegistry.registerComponent('albums', () => App);
