import React, { Component } from 'react';
import {
  ActivityIndicator,
  View
} from 'react-native';


export default class Loading extends Component {
  render() {
    return (
      <View style={{backgroundColor: "#ffffff",flex: 1,
      alignItems: "center",
      justifyContent: "center"}}>
        <ActivityIndicator
          animating={true}
          color="Black"
          size="large"
          style={{margin: 15}}
        />
       
      </View>
    );
  }
}