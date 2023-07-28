import React from 'react';
import Button from './Button';
import Center from '../Center/Center';

export default {
  parameter: { layout: 'Center' },
  title: 'Form/Button',
  component: Button,
  // decorators: [(story) => <Center>{story()}</Center>],
  argTypes: {
    // variantColor: { control: 'text' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
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

export const PrimaryA = (args) => <Button {...args} />;
PrimaryA.args = {
  variant: 'danger',
  children: 'kiyaaaaa',
  style: 'font-size:7555px',
};
