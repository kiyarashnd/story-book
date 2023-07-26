import React from 'react';
import Button from './Button';

export default {
  title: 'Form/Button',
  component: Button,
};

export const Primary = () => <Button variant='primary'>Primary</Button>;
export const Secondary = () => <Button variant='secondary'>Secondary</Button>;
export const Success = () => <Button variant='success'>Success</Button>;
export const Danger = () => <Button variant='danger'>Danger</Button>;

//in version 6 of story book we can change the name of story :
Primary.storyName = 'Small Input';
