import { AsyncStorage } from 'react-native'

/**
 * functions for app key
 */

export async function getMeta () {
  try {
    let app = await AsyncStorage.getItem('app')
    return app ? JSON.parse(app) : { isStarted: false, isLoggedIn: false }
  } catch (error) {
    throw new Error(`AsyncStorageError: ${error}`)
  }
}

async function setStarted () {
  try {
    let app = { isStarted: true, isLoggedIn: true }
    await AsyncStorage.setItem('app', JSON.stringify(app))    
  } catch (error) {
    throw new Error(`AsyncStorageError: ${error}`)
  }
}

async function unsetStarted () {
  try {
    let app = { isStarted: true, isLoggedIn: true }
    AsyncStorage.setItem('app', JSON.stringify(app))
  } catch (error) {
    throw new Error(`AsyncStorageError: ${error}`)
  }
}

async function skipStarted () {
  try {
    let app = { isStarted: true }
    AsyncStorage.mergeItem('app', JSON.stringify(app))    
  } catch (error) {
    throw new Error(`AsyncStorageError: ${error}`)
  }
}

/**
 * functions for user key
 */

export async function getUser () {
  try {
    let user = await AsyncStorage.getItem('user')
    return user ? JSON.parse(user) : { access_token: '' }
  } catch (error) {
    throw new Error(`AsyncStorageError: ${error}`)
  }
}

export async function addUser ({ data }) {
  try {
    await setStarted()
    let { access_token } = data
    await AsyncStorage.setItem('user', JSON.stringify({ access_token }))    
  } catch (error) {
    throw new Error(`AsyncStorageError: ${error}`)
  }
}

export async function setLogout () {
  try {
    await unsetStarted()
    await removeUser()    
  } catch (error) {
    throw new Error(`AsyncStorageError: ${error}`)
  }
}

async function removeUser () {
  try {
    await AsyncStorage.removeItem('user')    
  } catch (error) {
    throw new Error(`AsyncStorageError: ${error}`)
  }
}