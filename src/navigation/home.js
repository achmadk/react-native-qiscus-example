import React from 'react';
import { Icon } from 'native-base';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Articles from '../pages/articles';
import Restos from '../pages/restos';
import Chat from '../pages/chat';
import MyProfile from '../pages/my-profile';

export default TabNavigator({
  Articles: {
    path: 'articles',
    screen: Articles
  },
  Restos: {
    path: 'restos',
    screen: Restos
  },
  Chat: {
    path: 'chat',
    screen: Chat
  },
  MyProfile: {
    path: 'my-profile',
    screen: MyProfile
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  navigationOptions({ navigation }) {
    return {
      tabBarIcon({ focused }) {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Articles':
            iconName = 'paper'
            break;
          case 'Restos':
            iconName = 'restaurant'
            break;
          case 'Chat':
            iconName = 'chatbubbles'
            break;
          case 'MyProfile':
            iconName = 'person'
            break;
        }
        return (
          <Icon
            name={iconName}
            fontSize={28}
            active={focused}
            style={{color: focused ? '#fff' : 'rgba(255,255,255,0.8)'}}
          />
        );
      },
    }
  },
  tabBarOptions: {
    activeTintColor: '#fff',
    showIcon: true,
    showLabel: false,
    indicatorStyle: {
      backgroundColor: '#fbc02d',
      display: 'none'
    },
    style: {
      backgroundColor: '#3F51B5'
    }
  },
});