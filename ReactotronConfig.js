import Reactotron from 'reactotron-react-native'

let isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

Reactotron.clear();

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
  .connect()

const hijackConsole = (browserConsole) => {
  console.log = (...args) => {
    if (isDebuggingInChrome) {
      browserConsole(...args);
    }
    Reactotron.display({
      name: 'CONSOLE.LOG',
      value: args,
      preview: args.length > 1 ? JSON.stringify(args) : args[0]
    })
  };
};

hijackConsole(console.log);