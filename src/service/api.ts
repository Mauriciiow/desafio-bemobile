import axios from 'axios';
import {Platform} from 'react-native';
export const employeesApi = axios.create({
  baseURL: `http:${Platform.OS === 'android' ? '10.0.2.2' : 'localhost'}:3000`,
});
