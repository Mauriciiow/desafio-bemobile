import React from 'react';
import {IconProvider} from '../../providers/IconProvider';
import {Input, InputContainer, SearchIcon} from './styles';
import {SearchInputProps} from './@types';

export const SearchInput = ({
  onChange,
  placeholder,
  value,
}: SearchInputProps) => {
  return (
    <InputContainer>
      <Input placeholder={placeholder} onChangeText={onChange} value={value} />
      <SearchIcon source={IconProvider.search} />
    </InputContainer>
  );
};
