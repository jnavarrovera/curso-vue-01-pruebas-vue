import axios from "axios";

const fakeShopApi = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  // params: {
  //     key: 'lasdkfjlsdkjfgñslkhjgvlfdskhgñ349u039dfv8fhrh0943'
  // },
  // headers: {
  //     'x-token': 'kodsjflksdjfklsdjfklñsdj'
  // }
});

// fakeShopApi.interceptors.request.use((config) => {
//   config.headers = {...config.headers} as AxiosHeaders;
//   config.headers.set('Authorization', 'tokeny')
//   return config;
// });

export default fakeShopApi;
