import React from 'react'
import { Link, Route } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'

const LinkWrap = styled.div`
  text-align: right;
  & a {
    color: ${props => props.match ? '#33c1e3' : '#414141' };
    text-decoration: none;
    transition: .2s;
    &:hover {
      color: #33c1e3;
      transition: .2s;
    }
  }
`;

const Active = styled.div`
  display: inline-block;
  width: 6px;
  height: 45px;
  margin-left: 24px;
  vertical-align: middle;
  background-color: ${props => props.match ? '#33c1e3' : 'transparent'};
`;

const ActiveLink = ({ label, to, fontAwesome }) => (
  <Route path={to} children={({ match }) => (
    <LinkWrap match={match}>
      <Link to={to}>
        <FontAwesome name={ fontAwesome }/> {label} <Active match={match}/>
      </Link>
    </LinkWrap>
  )}/>
);

const Aside = () => (
  <aside>
    <nav>
      <ActiveLink to="/about" label='Обо мне' fontAwesome='user-secret'/>
      <ActiveLink to="/career" label='Карьерный путь' fontAwesome='rocket'/>
      <ActiveLink to="/portfolio" label='Портфолио' fontAwesome='briefcase'/>
    </nav>
  </aside>
);

export default Aside