// import libraries for making a component
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native';
// Make a component
export default class Header extends Component {

  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Albums!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    viewStyle: {
      backgroundColor: '#f8f8f8'
    },
    textStyle: {
      fontSize: 20
    }
});
