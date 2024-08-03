// Button.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: ${(props) => props.bgColor || '#006755'};
  color: ${(props) => props.color || 'white'};
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.hoverBgColor || 'darkblue'};
  }
`;

const Button = ({ text, id, onClick, bgColor, color, hoverBgColor }) => {
  return (
    <StyledButton
      id={id}
      onClick={onClick}
      bgColor={bgColor}
      color={color}
      hoverBgColor={hoverBgColor}
    >
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  hoverBgColor: PropTypes.string,
};

Button.defaultProps = {
  id: '',
  onClick: () => {},
  bgColor: '#006755',
  color: 'white',
  hoverBgColor: '#014439',
};

export default Button;
