import React from 'react'
import styled from 'styled-components'
import avatar from '../img/ava.jpg'
import StyledLink from './StyledLink'

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
`;

const Label = styled.div`
  width: 300px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
`;

const Avatar = styled.div`
  width: 138px;
  height: 138px;
  border: 1px solid #bebebe;
  border-radius: 50%;
  margin: -70px auto 12px;
  background-image: url(${avatar});
  background-size: cover;
  background-position: 50%;
`;

const Name = styled.span`
  display: inline-block;
  margin-bottom: 16px;
  font-size: 21px;
  line-height: 26px;
  white-space: pre;
`;

const LabelBottom = styled.div`
  padding: 20px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #33c1e3;
`;

class IndexPage extends React.Component {
  componentDidMount() {
    document.title = 'Hello, world!';
  }

  render() {
    return (
      <Wrap>
        <Label>
          <Avatar/>
          <Name>{'Андрей\nБахвалов'}</Name>
          <LabelBottom>
            <StyledLink
              to="/about"
              color="white"
            >Перейти на сайт</StyledLink>
          </LabelBottom>
        </Label>
      </Wrap>
    )
  }
}

export default IndexPage
