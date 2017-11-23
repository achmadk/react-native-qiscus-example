import compose from 'recompose/compose'
import shouldUpdate from 'recompose/shouldUpdate'
import { connectStyle } from 'native-base'

import ArticleCard from '../../components/card/article'

const style = {
  image: {
    height: 160,
    width: '100%',
    flex: 1
  }
}

export default compose(
  connectStyle(
    'caniresto.ArticleCardComponent',
    style
  ),
  shouldUpdate(({ slug }, nextProps) => slug !== nextProps.slug)
)(ArticleCard)