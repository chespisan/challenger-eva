import Axios from 'axios';

const { REACT_APP_API_CRYPTO } = process.env;

export const getCryptoService = async() => {
  try {
    const response = await Axios.get(`${REACT_APP_API_CRYPTO}`)
    return response.data;
  } catch (error) {
    console.log('error: ', error);
  }
}