<template>
  <section class="mb-40">
    <div class="container">
      <div class="flex justify-center">
        <div class="lg:w-2/4">
          <div class="main-title">
            <h1 class="font-bold text-main">Experience</h1>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center px-10">
        <div class="px-4 md:w-1/2 rounded-md">
          <div class="text-4xl mb-2 text-gray-400 capitalize">
            {{ activeExperience.name }}
          </div>
          <div class="text-xl mb-8 capitalize font-bold">
            {{ activeExperience.time }}
          </div>
          <div class="text-gray-600 italic mb-6">
            "{{ activeExperience.jobdesk }}"
          </div>
          <div>
            <a
              :href="activeExperience.url"
              target="_blank"
              class="bg-dark text-white rounded-full px-6 py-2">
              See Company
            </a>
          </div>
        </div>
        <div class="px-4 md:w-1/3">
          <div
            v-if="!!profile.experiences"
            class="bg-white shadow-xl rounded-md border flex jusitfy-center items-center p-6">
            <div>
              <div class="px-6 flex justify-center items-center -mx-4 mb-4">
                <a
                  class="px-4 cursor-pointer"
                  target="_blank"
                  @click="selectingExp(1)">
                  <img src="img/olsera.png"/>
                </a>
                <a
                  class="px-4 cursor-pointer"
                  target="_blank"
                  @click="selectingExp(2)">
                  <img src="img/popaket.png"/>
                </a>
              </div>
              
              <div class="px-6">
                <a
                  class="px-4 cursor-pointer"
                  target="_blank"
                  @click="selectingExp(3)">
                  <img src="img/devixel.png"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { appStore } from '~/store';
@Component({})
export default class ComponentExperience extends Vue {
  data() {
    return {
      profile: appStore.profile,
      selectedExp: 1
    }
  }

  get activeExperience () {
    const source = [...this.$data.profile.experiences];
    return source.find(x => x.id === this.$data.selectedExp);
  }

  selectingExp(id: number) {
    this.$data.selectedExp = id;
  }
}
</script>
