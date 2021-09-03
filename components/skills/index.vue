<template>
  <section class="mb-40">
    <div class="container">
      <div class="flex justify-center">
        <div class="lg:w-2/4">
          <div class="main-title">
            <h1 class="font-bold text-main">Skills</h1>
            <p>
              My experience provides new skills, took the skills I already had to the next level.
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-start -mx-4 flex-wrap">
        <div
          v-for="(skill, n) in skills"
          :key="n"
          class="w-full sm:w-1/2 lg:w-1/3 px-4 py-2.5">
          <div class="flex justify-between items-center">
            <div class="text-main text-sm font-semibold">
              {{ skill.name }}
            </div>
            <div class="text-xs text-main">
              {{ skill.value }}%
            </div>
          </div>

          <div class="progress border">
            <div
              :style="{ width: skill.value + '%' }"
              :class="[
                { 'bg-pink-500': skill.value <= 30 },
                { 'bg-yellow-400': skill.value > 30 && skill.value <= 50 },
                { 'bg-indigo-500': skill.value > 50 && skill.value <= 70 },
                { 'bg-green-400': skill.value > 70 }
              ]"
              class="progress-bar"
            />
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
@Component({
  layout: 'default',
})
export default class ComponentSkills extends Vue {
  data() {
    return {
      profile: appStore.profile,
      skills: []
    }
  }

  mounted() {
   this.setupSkills(); 
  }

  async setupSkills() {
    await this.$data.profile.skills.map((x: any) => {
      this.$data.skills.push({...x, value: 0});
    });
    await this.delay(300);
    this.$data.skills.map((x: any) => {
      const parent = [...this.$data.profile.skills].find(y => y.name === x.name);
      this.$set(x, 'value', parent.value);
    });
  }

  delay (time: number) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, time)
    })
  }
}
</script>