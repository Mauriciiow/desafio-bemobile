import styled from 'styled-components/native';
type OpenProps = {
  location: 'left' | 'right';
};
export const ContaineCard = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  padding: ${({theme}) => theme.spacing.regular16}px;
`;
export const ViewContent = styled.View`
  align-items: center;
  flex-direction: row;
`;
export const EmployeeName = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-family: ${({theme}) => theme.fonts.h3.family};
  font-size: ${({theme}) => theme.fonts.h3.size}px;
  text-align: center;
  flex: 1;
`;

export const EmployeePhoto = styled.Image`
  width: 34px;
  height: 34px;
  border-radius: 99px;
`;
export const ChevronDownButton = styled.TouchableOpacity``;
export const ChevronDownIcon = styled.Image``;
export const OpenCardView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const OpenCardText = styled.Text<OpenProps>`
  font-family: ${({theme, location}) =>
    location === 'left' ? theme.fonts.h2.family : theme.fonts.h3.family};
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.fonts.h2.size}px;
  margin-top: ${({theme}) => theme.spacing.regular16}px;
`;
