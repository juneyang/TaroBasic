import { GET_INFO } from '../ActionTyps'
import { handleActions } from 'redux-actions'

const INITIAL_STATE = {
  info: {}
}

const handler = {}

handler[GET_INFO] = (state, action) => {
    // console.log( 'userInfo::::', action.userInfo );
    // new Promise(() => cache.store.set('is_new_user', 1))
    return Object.assign({}, state, {
      info: action.info
    })
}

export default handleActions(handler, INITIAL_STATE)