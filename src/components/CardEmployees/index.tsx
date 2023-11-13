import {View} from 'react-native';
import React from 'react';
import {
  EmployeesList,
  TableContainer,
  TableHeaderIcon,
  TableHeaderText,
  TableHeaderView,
} from './styles';
import {IconProvider} from '../../providers/IconProvider';
import {Accordion} from './Accordion';
import {CardProps} from './@types';
import {EmployeesItem} from '../../Pages/Home/@types';

export const CardEmployees = ({data}: CardProps) => {
  return (
    <TableContainer>
      <TableHeaderView>
        <TableHeaderText left>FOTO</TableHeaderText>
        <TableHeaderText>NOME</TableHeaderText>
        <TableHeaderIcon source={IconProvider.ellipse} />
      </TableHeaderView>
      <EmployeesList
        data={data}
        renderItem={({item}) => <Accordion data={item as EmployeesItem} />}
        keyExtractor={item => (item as EmployeesItem).id.toString()}
        ItemSeparatorComponent={() => <View style={{height: 1}} />}
        showsVerticalScrollIndicator={false}
      />
    </TableContainer>
  );
};
