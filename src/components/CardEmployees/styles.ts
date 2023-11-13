import {Platform} from 'react-native';
import styled from 'styled-components/native';
type TableTextProp = {
  left?: boolean;
};
export const TableContainer = styled.View`
  flex: 1;
`;
export const TableHeaderView = styled.View`
  margin-bottom: 1px;
  height: 47px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.blueprimary};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  align-items: center;
  ${Platform.OS === 'ios'
    ? 'shadow-color: #000; shadow-offset: 1px 2px; shadow-opacity: 0.2; shadow-radius: 2px;'
    : 'elevation: 5;'}
`;
export const TableHeaderText = styled.Text<TableTextProp>`
  font-size: ${({theme}) => theme.fonts.h2.size}px;
  font-family: ${({theme}) => theme.fonts.h2.family};
  color: ${({theme}) => theme.colors.white};
  flex: 1;
  margin-left: ${({left, theme}) => (left ? theme.spacing.regular16 : 0)}px;
  margin-right: ${({left, theme}) => (!left ? theme.spacing.litle8 : 0)}px;
`;
export const TableHeaderIcon = styled.Image`
  margin-right: ${({theme}) => theme.spacing.regular28}px;
`;
export const EmployeesList = styled.FlatList``;
