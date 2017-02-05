import React from 'react'
import styled from 'styled-components'

const justify = {
  center: 'center',
  end: 'flex-end'
};

const align = {
  center: 'center',
  end: 'flex-end'
};

const Block = styled.div`
  box-sizing: border-box;
  padding: ${props => `${props.padding || 20}px`};
  ${props => props.align || props.justify ? 'display: flex;' : null}
  ${props => props.justify ? `justify-content: ${justify[props.justify]};` : null}
  ${props => props.align ? `align-items: ${align[props.align]};` : null}
`;

export const Container = styled(Block)`
  display: flex;
  flex-wrap: wrap;
  width: ${props => `${props.width || 1064}px`};
  margin: auto;
`;

export const Eight = styled(Block)`
  flex: 0 0 100%;
  max-width: 100%;
`;

export const Seven = styled(Block)`
  flex: 0 0 87,5%;
  max-width: 87,5%;
`;

export const Six = styled(Block)`
  flex: 0 0 75%;
  max-width: 75%;
`;

export const Five = styled(Block)`
  flex: 0 0 62,5%;
  max-width: 62,5%;
`;

export const Four = styled(Block)`
  flex: 0 0 50%;
  max-width: 50%;
`;

export const Three = styled(Block)`
  flex: 0 0 37,5%;
  max-width: 37,5%;
`;

export const Two = styled(Block)`
  flex: 0 0 25%;
  max-width: 25%;
`;

export const One = styled(Block)`
  flex: 0 0 12,5%;
  max-width: 12,5%;
`;

Container.propTypes = {
  width: React.PropTypes.number
};

Block.propTypes = {
  justify: React.PropTypes.oneOf(['center', 'end']),
  align: React.PropTypes.oneOf(['center', 'end']),
};