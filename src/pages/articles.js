import React, { PureComponent } from 'react';
import { Container, Header, Body, Title } from 'native-base';

class Articles extends PureComponent {
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Artikel</Title>
          </Body>
        </Header>
      </Container>
    );
  }
};

export default Articles;