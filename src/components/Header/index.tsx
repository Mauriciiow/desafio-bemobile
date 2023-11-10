import React from 'react';
import {Container, Logo} from './styles';
import {ImageProvider} from '../../providers/ImageProvider';

export const Header = () => {
  return (
    <Container>
      <Logo source={ImageProvider.logo} />
    </Container>
  );
};
