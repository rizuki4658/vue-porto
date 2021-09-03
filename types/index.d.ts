import type { CancelTokenStatic } from 'axios';
import { UserService } from '~/interface/users/service';

declare module 'axios' {
  interface AxiosRequestConfig {
    microService?: string;
  }
}

declare module '@nuxtjs/axios' {
  interface NuxtAxiosInstance {
    CancelToken: CancelTokenStatic;
  }
}

declare module '@nuxt/types' {
  interface Context {
    $userService: UserService;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $userService: UserService;
  }
}
