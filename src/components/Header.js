// import libraries for making a component
import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native';
// Make a component
export default class Header extends Component {

  render() {
    return (<Text style={styles.textStyle}>Albums!</Text>);
  }
}
const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20
    }
});
