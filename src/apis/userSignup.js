import axios from 'axios';

export const registerUserAPI = async (payload) => {
  try {
    console.log('api call>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    const response = await axios.post(
      `http://localhost:3003/api/v1/addUser`,
      payload,
    );
    return response.data;
  } catch (error) {
    console.error('error', error);
  }
};