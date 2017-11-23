import compose from 'recompose/compose'
import { connect } from 'react-redux'

import MyProfile from '../../components/my-profile'

import { doLogout } from '../../redux-store/actions/app'

const mapDispatchToProps = {
  doLogout
}

export default compose(
  connect(null, mapDispatchToProps)
)(MyProfile)