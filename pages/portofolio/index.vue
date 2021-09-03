<template>
  <transition name="my-layouts">
    <div>
      <div class="bg-dark h-16" />

      <div class="mb-40"/>

      <vp-works :items="filters" :works="profile.works" />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { appStore } from '~/store';
@Component({
  layout: 'default',
  transition: {
    name: 'my-layouts'
  }
})
export default class Portofolio extends Vue {
  data() {
    return {
      profile: appStore.profile,
      filters: appStore.filter
    }
  }
}
</script>