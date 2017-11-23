import React, { PureComponent } from 'react';
import { Container, Header, Body, Title } from 'native-base';

class Restos extends PureComponent {
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Resto</Title>
          </Body>
        </Header>
      </Container>
    );
  }
};

export default Restos;