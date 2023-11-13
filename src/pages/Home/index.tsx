import React, {useEffect, useState} from 'react';
import {
  Container,
  EmployeeInputView,
  EmployeesTitle,
  ViewTable,
} from './styles';
import {Header} from '../../components/Header';
import {SearchInput} from '../../components/SearchInput';
import {CardEmployees} from '../../components/CardEmployees';
import {employeesApi} from '../../service/api';
import {EmployeesItem} from './@types';
import {formatPhoneNumber} from '../../utils/formatPhoneNumber';
import {formateDate} from '../../utils/formatDate';

export const Home = () => {
  const [employeesData, setEmployees] = useState<EmployeesItem[]>([]);
  const [employeesFiltered, setFiltered] = useState<EmployeesItem[]>();
  const [inputValue, setValue] = useState<string>('');
  const getEmployees = async () => {
    try {
      const response = await employeesApi.get<EmployeesItem[]>('/employees');
      const responseFormatted = response.data.map(item => ({
        ...item,
        admission_date: formateDate(item.admission_date),
        phone: formatPhoneNumber(item.phone),
      }));

      setEmployees(responseFormatted);
      setFiltered(responseFormatted);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEmployees();
  }, []);

  const handleSearch = (text: string) => {
    if (text) {
      const textData = text.toUpperCase().trim();
      const checkField = ['name', 'job', 'phone'];
      const newData = employeesData?.filter(item => {
        return checkField.some(field => {
          const itemField = item[field];
          if (typeof itemField === 'string') {
            return itemField.toUpperCase().includes(textData);
          }

          return false;
        });
      });

      setFiltered(newData);
    } else {
      setFiltered(employeesData);
    }
    setValue(text);
  };
  return (
    <Container>
      <Header />
      <EmployeeInputView>
        <EmployeesTitle>Funcionários</EmployeesTitle>
        <SearchInput
          placeholder="Pesquisar"
          value={inputValue}
          onChange={handleSearch}
        />
      </EmployeeInputView>
      <ViewTable>
        <CardEmployees data={employeesFiltered as EmployeesItem[]} />
      </ViewTable>
    </Container>
  );
};
