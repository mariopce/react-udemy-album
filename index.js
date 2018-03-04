// import a libraty to help create a component
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header'; //check char size of Header
// create a component
export default class App extends Component {
  render() {
    return (
      <Header headerText="Albums!" />
    );
  }
}
// render it to the device
AppRegistry.registerComponent('albums', () => App);
