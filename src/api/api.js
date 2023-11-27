const BASE_URL = "https://fakestoreapi.com/";

const checkResponse = (res) => {
  if (res) return res.json();
  else return Promise.reject(`Ошибка ${res}`);
};

const checkSuccess = (res) => {
  if (res) return res;
  else return Promise.reject(`Ответ не success: ${res}`);
};

export const request = (endpoint, options) => {
  return fetch(`${BASE_URL}${endpoint}`, options)
    .then(checkResponse)
    .then(checkSuccess);
};
