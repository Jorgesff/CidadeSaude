import React, {Component} from 'react';
import {View, Text, Button, ToolbarAndroid} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Form from './Form';
export default class Home extends Component{
  static navigationOptions = ({ navigation }) => ({
    title: `Home`,
  });
  render(){
    return(
      <View style={{flex: 1, backgroundColor:'#CCC'}}>
        <Button onPress={() => {this.props.navigation.navigate('Form')}} title="Form"/>
      </View>
    );
  }
}
