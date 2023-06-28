import axios from 'axios';

const client = axios.create({
  baseURL: 'https://alex.devel.softservice.org/testapi/',
});

export const getIndicatorValues = (url) => client.get((url));
