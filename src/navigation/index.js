import { StackNavigator } from 'react-navigation';

import Home from './home'
import ArticleDetails from '../pages/article-details'
import Register from '../containers/register'

export default StackNavigator({
  Home: {
    screen: Home
  },
  ArticleDetails: {
    screen: ArticleDetails
  },
  Register: {
    screen: Register
  }
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
})