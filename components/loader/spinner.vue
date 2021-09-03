<template>
  <div class="lds-roller">
    <div v-for="n in 8" :key="n" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component';
@Component({})
export default class LoaderSpinner extends Vue {}
</script>
