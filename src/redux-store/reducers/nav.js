import { NavigationActions } from 'react-navigation'

import IndexNavigation from '../../navigation'

const initialState = IndexNavigation.router.getStateForAction(
  NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: 'Home'
      })
    ]
  })
)

export default function nav (state = initialState, action) {
  let nextState = IndexNavigation.router.getStateForAction(action, state)
  return nextState || state
}