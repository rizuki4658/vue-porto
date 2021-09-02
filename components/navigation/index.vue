<template>
  <header
    :class="[
      { 'absolute': !isScrolled },
      { 'fixed bg-dark shadow-lg': isScrolled }
    ]"
    class="top-0 left-0 w-full z-50">
    <nav class="navbar navbar-expand-lg w-full xl:px-20 md:relative md:px-10 px-2">
      <div class="relative flex items-center justify-between">
        <div class="p-2">
          <img src="img/logo.png" width="40"/>
        </div>
        <div class="md:relative absolute top-full left-0">
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
              <nuxt-link to="/porto">Portofolio</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/api">API</nuxt-link>
            </li>
          </ul>
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
      isScrolled: false
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