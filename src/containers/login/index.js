import { reduxForm } from 'redux-form'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import isEmpty from 'validator/lib/isEmpty'
import { connectStyle } from 'native-base'

import Login from '../../components/login'

import { doLogin } from '../../redux-store/actions/app'

const validate = values => {
  console.log(values)
  let { username, password } = values
  let error = {}
  if (isEmpty(username || '')) error.username = (username !== undefined) ? 'Username harus diisi' : ' '
  if (isEmpty(password || '')) error.password = (password !== undefined) ? 'Password harus diisi' : ' '
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
  doLogin
}

export default compose(
  connectStyle(
    'caniresto.LoginComponent',
    style
  ),
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'login',
    validate
  })
)(Login)