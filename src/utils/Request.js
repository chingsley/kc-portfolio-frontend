import axios from 'axios';

class Request {
  static async post({ url, data, contentType }) {
    const result = await axios({
      url,
      method: 'POST',
      data,
      headers: {
        'Content-type': contentType || 'application/json',
      },
    });
    return result;
  }

  static async get({ url, data, contentType }) {
    const result = await axios({
      url,
      method: 'GET',
      data,
      headers: {
        'Content-type': contentType || 'application/json',
      },
    });
    return result;
  }

  static async patch({ url, data, contentType }) {
    const result = await axios({
      url,
      method: 'PATCH',
      data,
      headers: {
        'Content-type': contentType || 'application/json',
      },
    });
    return result;
  }
  static async delete({ url, contentType }) {
    const result = await axios({
      url,
      method: 'DELETE',
      headers: {
        'Content-type': contentType || 'application/json',
      },
    });
    return result;
  }
}

export default Request;
