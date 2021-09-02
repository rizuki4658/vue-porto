import { Profile } from '~/utils/profiles';
import { Filter } from '~/utils/filter';
import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
@Module({
    name: 'modules/app',
    namespaced: true,
    stateFactory: true,
})
export class AppModule extends VuexModule {
    _language: string = 'en';
    _profile: object = Profile;
    _filter: Object = Filter;

    @Mutation
    public setLanguage(language: string = 'en') {
        this._language = language;
    }
    @Mutation
    public setProfile(profile: object) {
        this._profile = profile;
    }
    @Mutation
    public setFilter(filter: object) {
        this._filter = filter;
    }

    get language() {
        return this._language;
    }

    get profile() {
        return this._profile;
    }

    get filter() {
        return this._filter;
    }
};

export default AppModule;
