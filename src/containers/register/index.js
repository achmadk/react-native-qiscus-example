import { reduxForm } from 'redux-form'
import compose from 'recompose/compose'
import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'
import { connectStyle } from 'native-base'
import { connect } from 'react-redux'

import Register from '../../components/register'

import { doRegister } from '../../redux-store/actions/app'

const validate = values => {
  console.log(values)
  let { name, username, password, email } = values
  let error = {}
  if (isEmpty(name || '')) error.name = (name !== undefined) ? 'Complete name must not be blank' : ' '
  if (isEmpty(username || '')) error.username = (username !== undefined) ? 'Username must not be blank' : ' '
  if (isEmpty(password || '')) error.password = (password !== undefined) ? 'Password must not be blank' : ' '
  if (isEmpty(email || '')) error.email = (email !== undefined) ? 'Email Address must not be blank' : ''
  if (!isEmail(email || '')) error.email = (error.email && (error.email.length > 1)) ? `${error.email} and valid` : 'Email Address harus valid'
  return error
}

const style = {
  button: {
    marginTop: 24
  },
  heading: {
    marginTop: 24,
    marginBottom: 24,
    alignSelf: 'center'
  }
}

const mapDispatchToProps = {
  doRegister
}

export default compose(
  connectStyle(
    'caniresto.RegisterComponent',
    style
  ),
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'register',
    validate
  })
)(Register)