<template>
  <div>
    <vp-navigation />
    <Nuxt />
    <vp-footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component';
@Component({})
export default class Navigation extends Vue {}
</script>
