import React from 'react';
import { Button } from '@chakra-ui/react';
import { action, actions } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

//default export :
export default {
  title: 'Chkra/Button',
  component: Button,
};

export const Success = () => (
  <Button onClick={action('Click handler')} variantColor='green'>
    Success
  </Button>
);
export const Danger = () => (
  <Button {...actions('onClick', 'onMouseOver')} variantColor='red'>
    Danger
  </Button>
);

export const Log = (args) => <Button {...args} />;
Log.args = {
  variant: 'blue',
  children: 'kiyaButton',
  onClick: () => console.log('Button clicked', import.meta.env.STORYBOOK_THEME),
};

export const Knobs = () => (
  <Button variant='blue' disabled={boolean('Disable', false)}>
    {text('Label', 'Button Label')}
  </Button>
);
