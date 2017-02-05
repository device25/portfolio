import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Four } from './Layout'
import avatar from '../img/ava.jpg'

const Wrap = styled.header`
  position: relative;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
  background-color: #fff;
`;

const Avatar = styled(Link)`
  display: inline-block;
  width: 58px;
  height: 58px;
  border: 1px solid #bebebe;
  border-radius: 50%;
  margin-right: 14px;
  background-image: url(${avatar});
  background-position: 50%;
  background-size: cover;
  transition: .2s ease-in;
  &:hover {
    border-color: #33c1e3;
    transition: .2s ease-in;
  }
`;

const Name = styled.span`
  color: #414141;
`;

const Header = () => (
  <Wrap>
    <Container
      width={ 1024 }
      padding={ 5 }
    >
      <Four
        padding={ 5 }
        align={ 'center' }
      >
        <Avatar to='/about'/>
        <Name>Андрей Бахвалов</Name>
      </Four>
      <Four
        padding={ 5 }
        align={ 'center' }
        justify={ 'end' }
      >
        <span>Мои контакты</span>
      </Four>
    </Container>
  </Wrap>
);

export default Header