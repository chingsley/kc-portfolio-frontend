import axios from 'axios';
export const BASE_URL = 'http://localhost:3000/api/v1';

class Request {
  static async post(path, { data, contentType }) {
    const result = await axios({
      url: BASE_URL + path,
      method: 'POST',
      data,
      headers: {
        'Content-type': contentType || 'application/json',
      },
    });
    return result;
  }

  static async get(path, { data, contentType }) {
    const result = await axios({
      url: BASE_URL + path,
      method: 'GET',
      data,
      headers: {
        'Content-type': contentType || 'application/json',
      },
    });
    return result;
  }

  static async patch(path, { data, contentType }) {
    const result = await axios({
      url: BASE_URL + path,
      method: 'PATCH',
      data,
      headers: {
        'Content-type': contentType || 'application/json',
      },
    });
    return result;
  }

  static async delete(path, { contentType }) {
    const result = await axios({
      url: BASE_URL + path,
      method: 'DELETE',
      headers: {
        'Content-type': contentType || 'application/json',
      },
    });
    return result;
  }
}

export default Request;
