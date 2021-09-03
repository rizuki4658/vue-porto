import { Plugin } from "@nuxt/types";

export const apiService: Plugin = function ({ $axios, isDev, app, $config }) {
  const cancelSource = $axios.CancelToken.source();
  let cancelable = false;

  $axios.onRequest((config) => {
    cancelable = false;
    // if (config.microService) {
      // config.baseURL = `https://jsonplaceholder.typicode.com/${config.microService}`;
    config.baseURL = `https://jsonplaceholder.typicode.com`;

    config.headers = {
      ...config.headers,
      // 'api-key': $config.apiKey,
    };
    // }

    /*
    if (!config.cancelToken) {
      cancelable = true;
      config.cancelToken = cancelSource.token;
    }
    */
  });

  app.beforeDestroy = () => {
    if (!cancelable) {
      return;
    }

    cancelSource.cancel('Cancelled due to changing resource.');
  };
};

export default apiService;
