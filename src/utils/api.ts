import { IProduct } from "../models/models";

const BASE_URL = "https://fakestoreapi.com/";

export interface IRequestOptions {
  method: string;
  headers: Record<string, string>;
  body?: string;
}

const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) return res.json() as Promise<T>;
  else return res.json().then((err) => Promise.reject(err));
};

const checkSuccess = <T>(res: IProduct[]): Promise<T> => {
  if (Array.isArray(res)) return Promise.resolve(res as T);
  else return res as Promise<T>;
};

export const request = <T extends IProduct[]>(
  endpoint: string,
  options?: IRequestOptions
): Promise<T> => {
  return fetch(`${BASE_URL}${endpoint}`, options)
    .then(checkResponse<T>)
    .then(checkSuccess<T>);
};
