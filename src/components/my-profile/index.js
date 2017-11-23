import React, { PureComponent } from 'react'
import { Content, List, ListItem, Text } from 'native-base'

export default class MyProfileContent extends PureComponent {
  onLogoutButtonPressed = () => {
    console.log(`ListItem clicked!`)
    this.props.doLogout()
  }
  render () {
    return (
      <Content padder>
        <List>
          <ListItem button onPress={this.onLogoutButtonPressed}>
            <Text>Logout</Text>
          </ListItem>
        </List>
      </Content>
    )
  }
}