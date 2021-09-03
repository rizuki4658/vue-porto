import { Observable, of, PartialObserver } from 'rxjs';
import type { AxiosPromise, AxiosResponse } from 'axios';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { catchError, retryWhen } from 'rxjs/operators';

export const createAxiosObservable = function (
  this: NuxtAxiosInstance,
  method: (...args: any[]) => AxiosPromise,
  url: string,
  ...args: any[]
) {
  return new Observable((observer: PartialObserver<AxiosResponse>) => {
    const cancelToken = this.CancelToken.source();
    const argsWithCancelToken = args.map((arg) => ({
      ...arg,
      cancelToken: cancelToken.token,
    }));

    method(url, ...argsWithCancelToken).then(
      (result) => {
        observer.next?.(result);
        observer.complete?.();
      },
      (error) => {
        if (this.isCancel(error)) {
          observer.complete?.();
        } else {
          observer.error?.(error);
        }
      }
    );

    return () => cancelToken.cancel();
  }).pipe(
    catchError((error) => of(error))
  );
};
