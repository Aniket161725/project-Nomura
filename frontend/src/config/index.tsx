import axios from 'axios';

export const clientserver = axios.create({
  baseURL: 'https://localhost:9090'
});