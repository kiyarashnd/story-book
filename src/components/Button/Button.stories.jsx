import React from 'react';
import Button from './Button';
import Center from '../Center/Center';

export default {
  parameter: { layout: 'Center' },
  title: 'Form/Button',
  component: Button,
  // decorators: [(story) => <Center>{story()}</Center>],
};

export const Primary = () => (
  <Button variant='primary' size='5'>
    Primary
  </Button>
);
export const Secondary = () => (
  // <Center>
  <Button variant='secondary'>Secondary</Button>
  // </Center>
);
export const Success = () => <Button variant='success'>Success</Button>;
export const Danger = () => <Button variant='danger'>Danger</Button>;
