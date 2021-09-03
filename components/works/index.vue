<template>
  <section class="mb-56">
    <div class="container">
      <div class="flex justify-center">
        <div class="lg:w-2/4">
          <div class="main-title">
            <h1 class="font-bold text-main">Latest Works</h1>
            <p>
              When I have free time, I learn new things or make something. for example, learning React.js or expanding my knowledge of Vue.js and implementing it.  This is not a project or what I have done in a company
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="lg:w-3/4 w-full">
          <div class="works-filter rounded-md">
            <ul class="filter list mb-20 py-4 text-center relative">
              <li
                v-for="item in items"
                :key="item.id"
                :id="'porto-' + item.id"
                :class="[
                  'list-item',
                  { 'font-bold border-b': activeFilter === item.id }
                ]"
                class="text-white hover:text-gray-600 cursor-pointer my-1 sm:my-0"
                role="button"
                @click="setActive">
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
        <transition-group name="scale" tag="div" class="flex flex-wrap justify-center -mx-2">
          <div
            v-for="work in filtered" :key="work.id"
            class="xl:w-1/3 lg:w-2/4 w-full px-2 py-1.5">
            <div class="work-item rounded-md relative rounded-md border p-2">
              <img :src="'img/' + work.img" class="rounded-md w-full"/>
              <div class="work-overlay overflow-hidden absolute left-0 right-0 bottom-0 rounded-md flex justify-center items-center">
                <div class="flex-1 text-center">
                  <div class="font-bold uppercase text-white">{{ work.name }}</div>
                  <div class="my-4">
                    <a :href="work.url" :title="work.name" target="_blank" class="text-sm rounded-md bg-white py-2 px-4 flex-inline jutify-center items-center">
                      <img src="img/github.svg" width="16" class="inline"/>
                      github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
@Component({
  props: {
    items: Array || Object,
    works: Array || Object
  }
})
export default class ComponentWorks extends Vue {
  data() {
    return {
      activeFilter: 0
    }
  }

  get filtered() {
    if (this.$data.activeFilter === 0) return [...this.$props.works];
    return [...this.$props.works].filter((x: any) => {
      const includes = [...x.type_id].filter(y => y === this.$data.activeFilter);
      if (includes.length) return x;
    })
  }

  setActive(e: any) {
    const id = Number(e.target.id.replace('porto-', ''));
    this.$data.activeFilter = id;
  }
}
</script>
