import React from 'react';
import './Button.css';

function Button(props) {
  const { variant = 'primary', children, ...rest } = props;
  // children is text inside where we use this componetn

  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
