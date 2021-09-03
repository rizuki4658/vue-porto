import { Context } from '@nuxt/types';
import { FetchDataUser } from '~/interface/users/payload';
import { createAxiosObservable } from '~/modules/create-axios-observable';

export const fetchDataUser = function (
  this: Context,
  payload: FetchDataUser
) {
  return createAxiosObservable.call(
    this.$axios,
    this.$axios.get,
    '/users',
    {
      params: {
        ...payload,
      },
    }
  );
};

export const userService = function (this: Context) {
  return {
    fetchDataUser: fetchDataUser.bind(this),
  };
};

export default userService;
