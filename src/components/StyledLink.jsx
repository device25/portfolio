import { Link } from 'react-router-dom'
import styled from 'styled-components'

const color = {
  white: '#f6f6f6'
};

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 7px 13px;
  border: 2px solid ${props => color[props.color]};
  border-radius: 50px;
  color: ${props => color[props.color]};
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: .2s ease-in;
  &:hover {
    background-color: ${props => color[props.color]};
    color: #33c1e3;
    transition: .2s ease-in;
  }
`;

export default StyledLink