import React, { PureComponent } from 'react';
import { Container, Header, Body, Title, Content } from 'native-base';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { getPostsAction, getPosts } from '../redux-store/actions/posts';

import ArticleCard from '../containers/card/article';

class Articles extends PureComponent {
  componentDidMount () {
    this.props.getPosts()
  }
  render () {
    let { navigate } = this.props.navigation
    let { data } = this.props.posts
    return (
      <Container>
        <Header>
          <Body>
            <Title>Artikel</Title>
          </Body>
        </Header>
        <Content padder>
          { (data.length > 0) && data.map(post => <ArticleCard key={post.slug} data={post} onCardPressed={() => navigate('ArticleDetails', post)} />) }
        </Content>
      </Container>
    );
  }
};

const mapStateToProps = ({ posts }) => ({
  posts
})

// const mapDispatchToProps = dispatch => ({
//   getPosts () {
//     dispatch(getPostsAction())
//   }
// })

const mapDispatchToProps = {
  getPosts
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Articles);