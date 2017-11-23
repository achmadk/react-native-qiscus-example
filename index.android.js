/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
import { StyleProvider } from 'native-base';
import { PersistGate } from 'redux-persist/lib/integration/react';

import App from './src/app'

import getTheme from './native-base-theme/components';

import { store, persistor } from './src/redux-store';

import './ReactotronConfig'

export default class canirestoReactNative45 extends Component {
  render() {
    return (
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <StyleProvider style={getTheme()}>
            <App />
          </StyleProvider>
        </Provider>
      </PersistGate>
    )
  }
}

AppRegistry.registerComponent('canirestoReactNative45', () => canirestoReactNative45);
