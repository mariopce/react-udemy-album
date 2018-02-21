// import a libraty to help create a component
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
// create a component
const App = () => (
  <View>
    <Text>Some Text</Text>
    <Text>Some Text</Text>
    <Text>Some Text</Text>
    <Text>Some Text</Text>
    <Text>Some Text</Text>
    <Text>Some Text</Text>
    <Text>Some Text</Text>
    <Text>Some Text</Text>
    <Text>Some Text</Text>
    <Text>Some Text</Text>
    </View>
);
// render it to the device
AppRegistry.registerComponent('albums', () => App);
