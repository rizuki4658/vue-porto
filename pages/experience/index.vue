<template>
  <transition name="my-layouts">
    <div>
      <div class="bg-dark h-16" />

      <div class="mb-40"/>

      <vp-experience />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
@Component({
  layout: 'default',
  transition: {
    name: 'my-layouts'
  }
})
export default class Experience extends Vue {}
</script>