import React, { PureComponent } from 'react';
import { Container, Header, Left, Button, Icon, Body, Title } from 'native-base';

class ArticleDetails extends PureComponent {
  render () {
    let { state, goBack } = this.props.navigation
    let { title } = state.params
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => { goBack() }}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
        </Header>
      </Container>
    );
  }
};

export default ArticleDetails;