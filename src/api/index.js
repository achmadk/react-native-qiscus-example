import { create } from 'axios';

export default create({
  baseURL: 'http://caniresto.embrio.me/api/v1',
  timeout: 60000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});