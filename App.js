import React, { Component } from 'react'
import { connect, Provider } from 'react-redux';
import store from './src/store'
import Routing from './src/routing'
import { NativeBaseProvider, Box } from 'native-base';
import { StatusBar } from 'react-native';
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <Provider store={store}>
        <StatusBar style="auto" />
        <NativeBaseProvider >
          <Routing />
        </NativeBaseProvider>
      </Provider>
    )
  }
}

export default App;
