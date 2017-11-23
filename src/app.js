import React, { PureComponent } from 'react'
import { BackHandler } from 'react-native'
import { NavigationActions, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import AppNavigation from './navigation'

class App extends PureComponent {
  componentDidMount () {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
  }
  onBackPress = () => {
    let { dispatch, nav } = this.props
    if (nav.index === 0) {
      return false
    }
    dispatch(NavigationActions.back())
    return true
  }
  render () {
    let { dispatch, nav } = this.props
    let navigation = addNavigationHelpers({
      dispatch,
      state: nav
    })
    return (
      <AppNavigation navigation={navigation} />
    )
  }
}

const mapStateToProps = ({ nav }) => ({
  nav
})

export default compose(
  connect(mapStateToProps)
)(App)