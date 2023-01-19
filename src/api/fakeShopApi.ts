import axios, { AxiosHeaders } from "axios";

const fakeShopApi = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  // params: {
  //     key: 'lasdkfjlsdkjfgñslkhjgvlfdskhgñ349u039dfv8fhrh0943'
  // },
  // headers: {
  //     'x-token': 'kodsjflksdjfklsdjfklñsdj'
  // }
});

fakeShopApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token') ?? '';
  if(token) {
    (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`); // JWT
  }
  return config;
});

export default fakeShopApi;
