import axios from 'axios';
const BASE_IP = '192.168.8.111';
export const employeesApi = axios.create({
  baseURL: `http://${BASE_IP}:3000`,
});
