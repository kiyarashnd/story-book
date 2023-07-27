import React from 'react';
import './Center.css';

const Center = (props) => {
  console.log('props in Center component : ', props.children);
  //here props.children is component that are wraped in Center components
  return <div className='center'>{props.children}</div>;
};

export default Center;
