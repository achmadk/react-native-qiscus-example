import React, { PureComponent } from 'react';
import { Container, Header, Body, Title, Tabs, Tab, ScrollableTab } from 'native-base';

class Restos extends PureComponent {
  render () {
    return (
      <Container>
        <Header hasTabs>
          <Body>
            <Title>Resto</Title>
          </Body>
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Martabak" />
          <Tab heading="Pecel Lele" />
          <Tab heading="Kafe" />
          <Tab heading="Nasi Padang" />
          <Tab heading="Ketoprak" />
        </Tabs>
      </Container>
    );
  }
};

export default Restos;