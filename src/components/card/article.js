import React from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Body, Text, H1 } from 'native-base'

export default function ArticleCard ({ data, style, onCardPressed }) {
  let { title, excerpt } = data
  let navigate = () => { console.log('card is pressed!')}
  return (
    <Card>
      <CardItem cardBody button onPress={onCardPressed}>
        <Image source={{ uri: `https://dummyimage.com/600x400/5f5f5f/f0f0f0.jpg&text=${title}` }} style={style.image} />
      </CardItem>
      <CardItem header button onPress={onCardPressed}>
        <H1>{title}</H1>
      </CardItem>
      <CardItem button onPress={onCardPressed}>
        <Body>
          <Text>
            {excerpt}
          </Text>
        </Body>
      </CardItem>
    </Card>
  )
}
