import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray00};
`;

export const EmployeeInputView = styled.View`
  margin: 0 20px 20px 20px;
`;
export const ViewTable = styled.View`
  flex: 1;
  margin: 0 20px 0 20px;
`;

export const EmployeesTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.h1.family};
  font-size: ${({theme}) => theme.fonts.h1.size}px;
  color: ${({theme}) => theme.colors.black};
  margin-top: ${({theme}) => theme.spacing.regular28}px;
  margin-bottom: ${({theme}) => theme.spacing.medium32}px;
`;
