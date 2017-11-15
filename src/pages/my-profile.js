import React, { PureComponent } from 'react';
import { Container, Header, Body, Title } from 'native-base';

class MyProfile extends PureComponent {
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Profil Saya</Title>
          </Body>
        </Header>
      </Container>
    );
  }
};

export default MyProfile;