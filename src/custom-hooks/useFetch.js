import { useState, useEffect, useCallback } from 'react';
import { Request } from '../utils';
import customToast from '../utils/customToast';

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [request, setRequest] = useState(null);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const fetchApi = useCallback(async () => {
    try {
      if (request) {
        setLoading(true);
        const { method, body, headers = {}, endpoint } = request;
        const response = await Request[method](endpoint, {
          body,
          headers,
        });
        setLoading(false);
        setData(response.data);
        setSuccessMsg(response.data.message);
        customToast.success(response.data.message);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      customToast.error(errorMessage);
      setLoading(false);
      setError(errorMessage);
    }
  }, [request]);

  useEffect(() => {
    fetchApi();
  }, [request, fetchApi]);

  return { setRequest, data, error, successMsg, loading, setSuccessMsg };
};
