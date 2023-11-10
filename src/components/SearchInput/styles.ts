import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const InputContainer = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.gray10};
  background-color: ${({theme}) => theme.colors.white};
  padding: ${Platform.OS === 'android' ? 4 : 12}px;
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 12px;
  align-items: center;
`;

export const Input = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.gray20,
}))`
  flex: 1;
  font-size: ${({theme}) => theme.fonts.h3.size}px;
  font-family: ${({theme}) => theme.fonts.h3.family};
`;
export const SearchIcon = styled.Image``;
