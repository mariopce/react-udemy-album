// import libraries for making a component
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native';
// Make a component
export default class Header extends Component {

  constructor(props) {
   super(props);
   this.state = { headerText: '' };
 }
  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    viewStyle: {
      backgroundColor: '#f8f8f8',
      // This center only verticaly justifyContent: 'center'
      //horisontal  alignItems: 'flex-end'
      justifyContent: 'center',
      alignItems: 'center',
      height: 60, //px
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative',
    },
    textStyle: {
      fontSize: 20
    }
});
