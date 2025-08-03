import axios from 'axios';

export const useAPI = () => {
  const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const createAPI = (withAuth = false) => {
    const instance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (withAuth) {
      instance.interceptors.request.use(
        (config) => {
          const token = localStorage.getItem('token');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      instance.interceptors.response.use(
        (response) => response,
        (error) => {
          if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/careers/login';
          }
          return Promise.reject(error);
        }
      );
    }

    return instance;
  };

  return {
    api: createAPI(),
    authAPI: createAPI(true),
  };
}; 