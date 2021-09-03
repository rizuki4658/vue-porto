<template>
  <section class="mb-40">
    <div class="container">
      <div class="flex justify-center">
        <div class="lg:w-2/4">
          <div class="main-title">
            <h1 class="font-bold text-main">Example</h1>
          </div>
        </div>
      </div>

      <transition-group name="my-layouts">
        <table
          v-if="!!!loading && !!users"
          key="view-one"
          class="w-full border-collapse border rounded-lg">
          <thead class="bg-dark">
            <tr>
              <th
                v-for="(header, n) in columnTable"
                :key="n"
                class="px-4 text-left text-sm py-2 text-white uppercase">
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="user in users"
              :key="user.id">
              <td
                v-for="(column, c) in columnTable"
                :key="user.id + '-' + c"
                class="px-4 py-4 text-main text-sm border-b">
                <template v-if="column === 'address'">
                  {{ user[column].street }},
                  {{ user[column].suite }},
                  {{ user[column].city }},
                  {{ user[column].zipcode }}
                </template>
                <template v-else-if="column === 'website'">
                  {{ user[column] }}
                </template>
                <template v-else-if="column === 'company'">
                  {{ user[column].name }}
                </template>
                <template v-else>
                  {{ user[column] }}
                </template>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          v-else-if="!!!loading && !users"
          key="view-two"
          class="w-full border-collapse border rounded-lg">
          <thead class="bg-dark">
            <tr>
              <th class="px-4 py-4 text-lg text-white">Users Table</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="px-4 py-4 text-main">
                Data not found
              </th>
            </tr>
          </tbody>
        </table>
        <div
          v-else
          key="vue-three"
          class="h-64 bg-gray-700 bg-opacity-10 text-gray-400 rounded-lg flex justify-center items-center">
          <vp-loader-spinner />
        </div>
      </transition-group>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component';
import { map, switchMap, tap } from 'rxjs/operators';
@Component({
  subscriptions() {
    return {
      requestDataUser: (this as ComponentApiPage).$requestUser,
    };
  }
})
export default class ComponentApiPage extends Vue {
  data() {
    return {
      users: null,
      loading: true
    }
  }

  mounted() {
    (this as any).doFetch();
  }

  get $requestUser() {
    return this.$createObservableMethod('doFetch').pipe(
      tap(() => {
        this.$data.loading = true;
      }),
      switchMap(this.$userService.fetchDataUser),
      map((res) => res.data),
      tap((data) => {
        this.$data.loading = false;
        if (!!data) {
          this.$data.users = data;
        } else {
          this.$data.users = null;
        }
      })
    );
  }

  get columnTable() {
    const source = this.$data.users;
    const data = [];
    if (!!source) {
      const columns = Object.keys(source[0]);
      for (let i = 0; i < columns.length; i++) {
        data.push(columns[i]);
      }
      return data;
    }
    return [];
  }
}
</script>