import React from 'react';
import './Button.css';

function Button(props) {
  const { variant = 'primary', children, size, ...rest } = props;
  // children is text inside where we use this componetn

  return (
    <button
      className={`button ${variant}`}
      {...rest}
      style={{ width: size + 'px' }}
    >
      {children}
    </button>
  );
}

export default Button;
