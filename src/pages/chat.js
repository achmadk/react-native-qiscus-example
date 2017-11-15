import React, { PureComponent } from 'react';
import { Container, Header, Body, Title, Content } from 'native-base';

import ChatBody from '../components/chat'

class Chat extends PureComponent {
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Chat</Title>
          </Body>
        </Header>
        <Content>
          <ChatBody />
        </Content>
      </Container>
    );
  }
};

export default Chat;