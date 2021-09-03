/* eslint-disable camelcase */

export interface VuePortoResponse<T = any> {
  data: T;
}

export type PartialVuePortoResponse<T = any> = Partial<VuePortoResponse<T>>;

/* eslint-enable camelcase */