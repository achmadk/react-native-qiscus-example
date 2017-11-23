import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import { createStore } from 'redux'

let isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

Reactotron.clear();

  if (isDebuggingInChrome) {
    Reactotron
    .configure({
      name: 'Caniresto React Native App',
      socketIoProperties: {
        reconnection: true,
        reconnectionDelay: 2000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: 5
      }
    })
    .useReactNative()
    .use(reactotronRedux())
    .connect()

    console.tron = Reactotron

    const hijackConsole = (browserConsole) => {
      console.log = (...args) => {
        browserConsole(...args);
      }

      Reactotron.display({
        name: 'CONSOLE.LOG',
        value: args,
        preview: args.length > 1 ? JSON.stringify(args) : args[0]
      })
    };

    hijackConsole(console.log);
  }