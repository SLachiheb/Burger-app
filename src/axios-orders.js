import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://react-burger-builder-4e679-default-rtdb.europe-west1.firebasedatabase.app',
});

export default instance;
