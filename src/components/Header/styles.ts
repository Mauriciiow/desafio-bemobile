import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.black};
  height: 60px;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-left: ${({theme}) => theme.spacing.regular20}px;
`;
