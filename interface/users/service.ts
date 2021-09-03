import { AxiosObservable } from '../axios-observable';
// import { VuePortoResponse } from '../default';
import { FetchDataUser } from './payload';
export type UserService = {
  fetchDataUser<T = any>(
    payload: Partial<FetchDataUser>
  ): AxiosObservable<T>;
}