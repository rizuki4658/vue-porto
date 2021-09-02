
<template>
  <div>
    <vp-hero :name="profile.name" :profession="profile.profession"/>
    <vp-works :items="filters" :works="profile.works" />
    <vp-about />
    <vp-experience v-bind="activeExperience"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { appStore } from '~/store';
@Component({
  layout: 'default',
})
export default class Home extends Vue {
  data() {
    return {
      profile: appStore.profile,
      filters: appStore.filter
    }
  }
}
</script>
