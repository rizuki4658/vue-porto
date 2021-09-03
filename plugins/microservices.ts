import { Plugin } from "@nuxt/types";
import userService from './service/users';
export const microServices: Plugin = function(_ctx, _inject) {
  _inject('userService', userService.call(_ctx));
};
export default microServices;
