import React from 'react'
import styled from 'styled-components'
import { Container, Four } from './Layout'

const Wrap = styled.footer`
  background-color: #414141;
`;

const Copyright = styled.span`
  color: #727272;
  font-size: 14px;
  font-weight: 300;
`;

const Footer = () => (
  <Wrap>
    <Container
      width={ 1024 }
      padding={ 5 }
    >
      <Four
        padding={ 5 }
        align={ 'center' }
      >
        <Copyright>© Дизайн сайта был разработан в школе LoftSchool</Copyright>
      </Four>
      <Four
        padding={ 5 }
        align={ 'center' }
        justify={ 'end' }
      >
        links
      </Four>
    </Container>
  </Wrap>
);

export default Footer