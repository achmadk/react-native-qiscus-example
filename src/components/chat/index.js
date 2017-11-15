/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { InitApp, ChatRenderer } from 'react-native-qiscus-sdk';

export default class ChatBody extends PureComponent {
  constructor() {
    super();
    this.state = {
      qiscus: null,
      newMessage: null,
      rooms: null,
      selectedRoom: null,
    };
  }
  componentWillMount() {
    // required object to initialize app, this config just for demo, change it with your qiscus credential account.
    const userAuth = {
      email: 'fikri@qiscus.com',
      password: 'password',
      displayName: 'fikri',
      avatar: null,
      appID: 'coba-qisc-hcv3rbeltb6',
    }
    // required call back method to set global state of rooms list
    const setRooms = (data) => this.setState({rooms: data});

    // required call back method to set global state of qiscus object
    const initApp = (data) => this.setState({qiscus: data});

    // required call back method to catch new received message
    const receiveNewMessage = (data) => this.setState({newMessage: data});
    InitApp({initApp, receiveNewMessage, setRooms, userAuth});
  }
  _openChat(room) {
    this._chatTarget(room);
  }
  _chatTarget (selectedRoom) {
    this.setState({
      selectedRoom
    });
  }
  render() {
    let {rooms, selectedRoom, qiscus, newMessage} = this.state;
    const initApp = qiscus => this.setState({ qiscus });
    if (!rooms) {
      return <View style={{marginTop: 40}}><Text>Initialize App...</Text></View>;
    }
    console.log(this.state)
    if (!selectedRoom) {
      return (
        <View style={styles.container}>
          { (rooms.length > 0) ? rooms.map((item, i) => {
              const name = item.room_name
              const avatar_url = item.avatar_url || 'https://qiscuss3.s3.amazonaws.com/uploads/55c0c6ee486be6b686d52e5b9bbedbbf/2.png';
              return (
                  <TouchableOpacity
                    key={i}
                    style={styles.row}
                    onPress={() =>
                      this._openChat({name: name, id: item.id})
                    }
                  >
                    <View style={styles.containerRow}>
                      <Image source={{ uri: avatar_url }} style={styles.photo} />
                      <Text style={styles.text}>
                        {name}
                      </Text>
                    </View>
                  </TouchableOpacity>
              );
            }) : <Text>No rooms available</Text>}
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity style={{marginLeft: 30, marginBottom: 10, marginTop: 0, justifyContent: 'center', alignItems: 'center', height: 40, width: 80, borderWidth: 1, borderColor: '#333131'}} onPress={() => this.setState({selectedRoom: null})}>
            <Text>Back</Text>
          </TouchableOpacity>
          <ChatRenderer qiscus={qiscus} message={newMessage} room={selectedRoom} initApp={initApp} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // height: '100%'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  containerRow: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dce2e9',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  }
})