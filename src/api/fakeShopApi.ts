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
  // TODO
  (config.headers as AxiosHeaders).set("Authorization", `Bearer popo`);
  return config;
});

export default fakeShopApi;
