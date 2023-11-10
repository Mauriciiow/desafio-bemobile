import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.black};
  height: 60px;
  justify-content: center;
  ${Platform.OS === 'ios'
    ? 'shadow-color: #000; shadow-offset: 0 2px; shadow-opacity: 0.3; shadow-radius: 2px;'
    : 'elevation: 5;'}
`;

export const Logo = styled.Image`
  margin-left: ${({theme}) => theme.spacing.regular20}px;
`;
