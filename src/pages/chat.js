import React, { PureComponent } from 'react';
import { Container, Header, Body, Title, Content } from 'native-base';
import compose from 'recompose/compose'
import { connect } from 'react-redux'

import ChatBody from '../components/chat'
import Login from '../containers/login'

class Chat extends PureComponent {
  onRegisterButtonPressed = () => {
    let { navigate, state } = this.props.navigation
    navigate('Register', { fromPage: state.routeName })
  }
  render () {
    let { isLoggedIn } = this.props
    return (
      <Container>
        <Header>
          <Body>
            <Title>Chat</Title>
          </Body>
        </Header>
        { isLoggedIn ? <ChatBody /> : <Login onRegisterButtonPressed={this.onRegisterButtonPressed} />}
      </Container>
    );
  }
};

const mapStateToProps = ({app}) => {
  let { isLoggedIn, isStarted, access_token } = app
  return {
    isLoggedIn,
    isStarted,
    access_token
  }
}

export default compose(
  connect(mapStateToProps)
)(Chat);