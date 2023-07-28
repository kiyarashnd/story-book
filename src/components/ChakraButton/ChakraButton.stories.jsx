import React from 'react';
import { Button } from '@chakra-ui/react';

//default export :
export default {
  title: 'Chkra/Button',
  component: Button,
};

export const Success = () => <Button variantColor='green'>Success</Button>;
export const Danger = () => <Button variantColor='red'>Danger</Button>;
