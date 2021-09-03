<template>
  <header
    :class="[
      { 'absolute': !isScrolled },
      { 'fixed shadow-lg bg-dark': isScrolled }
    ]"
    class="top-0 left-0 w-full z-50">
    <nav class="navbar navbar-expand-lg w-full xl:px-20 md:relative md:px-10 px-2">
      <div class="relative flex items-center justify-between">
        <div class="p-2">
          <img src="img/logo.png" width="40"/>
        </div>
        <div
          :class="[
            'nav-container',
            { 'active': isActive },
            'md:relative shadow-lg',
            'sm:shadow-none absolute',
            'top-full lg:left-0',
            'lg:right-0 -left-2 -right-2',
            'px-4 lg:px-0'
          ]">
          <ul class="md:flex justify-end items-center">
            <li class="nav-item mr-10">
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li class="nav-item mr-10">
              <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li class="nav-item mr-10">
              <nuxt-link to="/skills">Skills</nuxt-link>
            </li>
            <li class="nav-item mr-10">
              <nuxt-link to="/experience">Experience</nuxt-link>
            </li>
            <li class="nav-item mr-10">
              <nuxt-link to="/portofolio">Portofolio</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/apipage">API</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="md:hidden px-2">
          <transition-group name="my-layouts" tag="div" class="relative h-12 w-8">
            <div
              v-if="isActive"
              key="trigger-close"
              class="absolute top-1/2 right-0 transform -translate-y-1/2"
            >
              <img
                src="img/close.svg"
                width="40"
                @click="isActive = false"
              />
            </div>
            <div
              v-else
              key="trigger-show"
              class="absolute top-1/2 right-0 transform -translate-y-1/2">
              <img
                src="img/application-menu.svg"
                width="40"
                @click="isActive = true"
              />
            </div>
          </transition-group>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
@Component({})
export default class Navigation extends Vue {
  data() {
    return {
      isScrolled: false,
      isActive: false
    }
  }

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  }

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  get activeExperience () {
    const source = [...this.$data.profile.experiences];
    return source.find(x => x.id === this.$data.selectedExp);
  }

  selectingExp(id: number) {
    this.$data.selectedExp = id;
  }

  handleScroll(e: any) {
    const scrolled: number = e.target.scrollingElement.scrollTop;
    if (scrolled >= 56) {
      this.$data.isScrolled = true;
    } else {
      this.$data.isScrolled = false;
    }
  }
}
</script>