<template>
  <section id="hero" class="h-screen flex flex-col justify-center items-center">
    <div class="md:bg-transparent bg-opacity-30 bg-white p-16 text-center mx-4 rounded-md">
      <div class="mx-2 md:mx-auto w-full md:w-auto text-white">
        <h1 class="uppercase font-bold mb-4 text-4xl sm:text-6xl">{{ name }}</h1>
        <h3 class="capitalize text-xl sm:text-3xl">{{ profession }}</h3>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
@Component({
  props: {
    name: String,
    profession: String
  }
})
export default class ComponentHero extends Vue {}
</script>