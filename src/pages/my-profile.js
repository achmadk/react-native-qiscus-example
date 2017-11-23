import React, { PureComponent } from 'react';
import { Container, Header, Body, Title } from 'native-base';
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import MyProfileContent from '../containers/my-profile'
import Login from '../containers/login'

class MyProfile extends PureComponent {
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
            <Title>Profil Saya</Title>
          </Body>
        </Header>
        { isLoggedIn ? <MyProfileContent /> : <Login onRegisterButtonPressed={this.onRegisterButtonPressed} /> }
      </Container>
    );
  }
};

const mapStateToProps = ({ app }) => {
  let { isLoggedIn, isStarted, access_token } = app
  return {
    isLoggedIn,
    isStarted,
    access_token
  }
}

export default compose(
  connect(mapStateToProps)
)(MyProfile);