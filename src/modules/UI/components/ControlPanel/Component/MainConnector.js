// @flow

import { connect } from 'react-redux'

import { registerFioAddress } from '../../../../../actions/FioActions.js'
import type { Dispatch, State } from '../../../../../types/reduxTypes.js'
import { logoutRequest } from '../../../../Login/action'
import Main from './Main'

const mapStateToProps = (state: State) => ({
  usersView: state.ui.scenes.controlPanel.usersView
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: (username?: string) => dispatch(logoutRequest(username)),
  registerFioAddress () {
    return dispatch(registerFioAddress())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
