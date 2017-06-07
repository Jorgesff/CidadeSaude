/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Home from './sheets/Home';
import Form from './sheets/Form';
const ChildNavigator = StackNavigator ({
  Home: {
    screen: Home,
  },
  Form: {
    screen: Form,
    navigationOptions: {
      title: 'Formulario',
      drawerLabel: 'Form'
    }
  }
});

const RootNavigator = DrawerNavigator({
  Root: {
    screen: ChildNavigator
  },
  Form: {
    screen: Form
  }
});

AppRegistry.registerComponent('CidadeSaude', () => RootNavigator);
