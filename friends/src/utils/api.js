import axios from 'axios';

export default function() {
  return axios.create({
    baseURL: 'https://localhost:5000',
    headers: {
      Authorization: getToken()
    }
  });
}

export function getToken() {
  return localStorage.getItem('token');
}
