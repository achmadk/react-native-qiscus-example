/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
import { StyleProvider } from 'native-base';
import { InitApp, ChatRenderer } from 'react-native-qiscus-sdk';

import AppNavigation from './src/navigation'

import getTheme from './native-base-theme/components';

import './ReactotronConfig'

export default class canirestoReactNative45 extends Component {
  render() {
    return (
      <StyleProvider style={getTheme()}>
        <AppNavigation />
      </StyleProvider>
    )
  }
}

AppRegistry.registerComponent('canirestoReactNative45', () => canirestoReactNative45);
