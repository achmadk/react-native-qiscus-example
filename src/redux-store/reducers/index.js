import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { persistCombineReducers} from 'redux-persist'
import storage from 'redux-persist/es/storage'

import app from './app'
import posts from './posts'
import nav from './nav'

import appData from '../../../package.json'

let config = {
  key: `caniresto-${appData.version}`,
  storage
}

export default persistCombineReducers(config, {
  app,
  form,
  nav,
  posts
})