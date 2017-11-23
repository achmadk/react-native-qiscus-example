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

export default class Register extends PureComponent {
  constructor(props) {
    super(props)
    this.renderInput = this.renderInput.bind(this)
    this.submit = this.submit.bind(this)
  }
  changeLabel (name) {
    switch (name) {
      case 'name':
        return 'Complete Name'
      case 'username':
        return 'Username'
      case 'email':
        return 'Email Address'
      case 'password':
        return 'Password'
    }
  }
  goBack = () => {
    this.props.navigation.goBack()
  }
  renderInput ({ input, meta }) {
    let { onChange, ...restInput } = input
    let { error } = meta
    let hasError = error && error.length > 0
    return (
      <Item stackedLabel last={input.name === 'password'}>
        <Label>{this.changeLabel(input.name)}</Label>
        <Item error={hasError}>
          <Input onChangeText={onChange} {...restInput} secureTextEntry={input.name === 'password'} />
          {hasError && <Icon name='close-circle' />}
        </Item>
      </Item>
    )
  }
  submit (values) {
    let { doRegister, navigation } = this.props
    let { navigate, state } = navigation
    console.log('submitting form', values)
    doRegister(values)
      .then(() => {
        navigate(state.params.fromPage)
      })
  }
  render() {
    let { handleSubmit, style, invalid } = this.props
    return (
      <Content padder>
        <H3 style={style.heading}>Please Register</H3>
        <Field name="name" component={this.renderInput} />
        <Field name="username" component={this.renderInput} />
        <Field name="email" component={this.renderInput} />
        <Field name="password" component={this.renderInput} />
        <Button disabled={invalid} style={style.button} block onPress={handleSubmit(this.submit)}>
          <Text>Register</Text>
        </Button>
        <Button style={style.button} transparent block onPress={this.goBack}>
          <Text>Login</Text>
        </Button>
      </Content>
    )
  }
}
