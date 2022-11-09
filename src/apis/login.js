import axios from 'axios';

export const requestOtpAPI = async (payload) => {
  try {
    console.log('api call>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    const response = await axios.post(
      `http://localhost:3003/api/v1/loginWithOtp`,
      payload,
    );
    return response.data;
  } catch (error) {
    console.error('error', error);
  }
};