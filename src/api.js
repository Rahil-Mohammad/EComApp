import axios from 'axios';

export const getProData = (id) => {
  return axios.get(`https://dummyjson.com/products/${id}`);
};

export const getList = () => {
  return axios.get('https://dummyjson.com/products');
};
