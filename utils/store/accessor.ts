import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import AppModule from '~/store/modules/app';

/* eslint-disable import/no-mutable-exports */
let appStore: AppModule;

/* eslint-enable import/no-mutable-exports */

function initializeStores(store: Store<any>): void {
  appStore = getModule(AppModule, store);
}

export { initializeStores, appStore };
