import React from 'react'
import styled from 'styled-components'
import { Container, Two, Six } from './Layout'
import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'

const title = {
  '/about': 'Обо мне',
  '/career': 'Карьерный путь',
  '/portfolio': 'Портфолио'
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1024px;
  min-height: 100vh;
  background-color: #f6f6f6;
`;

const Content = styled.div`
  flex: 1 0 0%;
`;

class MainPage extends React.Component {
  componentWillMount() {
    document.title = title[this.props.path];
  }

  render() {
    return (
      <Wrap>
        <Header/>
        <Content>
          <Container width={ 1024 } padding={ 10 }>
            <Two padding={ 10 }>
              <Aside/>
            </Two>
            <Six padding={ 10 }>
              <h3>ID: {this.props.match.url}</h3>
              <h2>main content</h2>
            </Six>
          </Container>
        </Content>
        <Footer/>
      </Wrap>)
  }
}

export default MainPage
