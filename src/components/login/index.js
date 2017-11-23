import React, { PureComponent } from 'react'
import {
  Content,
  Form,
  Item,
  Label,
  Input,
  Icon,
  Text,
  Button,
  H3
} from 'native-base'
import { Field } from 'redux-form';

import LoadingModal from '../modals/loading-ajax'

export default class Login extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { isModalVisible: false }
    this.renderInput = this.renderInput.bind(this)
    this.submit = this.submit.bind(this)
  }
  renderInput ({ input, meta }) {
    let { onChange, ...restInput } = input
    let { error} = meta
    let hasError = error && error.length > 0
    return (
        <Item stackedLabel last={input.name === 'password'}>
          <Label>{input.name}</Label>
          <Item error={hasError}>
          <Input onChangeText={onChange} {...restInput} secureTextEntry={input.name === 'password'} />
            { hasError && <Icon name='close-circle' /> }
          </Item>
        </Item>
    )
  }
  async submit (values) {
    try {
      console.log('submitting form', values)
      this.setState({ isModalVisible: true })
      await this.props.doLogin(values)
      this.setState({
        isModalVisible: false
      })
    } catch (error) {
      this.setState({
        isModalVisible: false
      })      
    }
  }
  render () {
    let { submitting, handleSubmit, style, onRegisterButtonPressed, invalid } = this.props
    return (
      <Content padder>
        <H3 style={style.heading}>Please Login to continue</H3>
        <Field name="username" component={this.renderInput} />
        <Field name="password" component={this.renderInput} />
        <Button disabled={invalid} style={style.button} block onPress={handleSubmit(this.submit)}>
          <Text>{ submitting ? 'Loading' : 'Login' }</Text>
        </Button>
        <Button style={style.button} transparent block onPress={onRegisterButtonPressed}>
          <Text>Register</Text>
        </Button>
        <LoadingModal isVisible={this.state.isModalVisible} />
      </Content>
    )
  }
}
