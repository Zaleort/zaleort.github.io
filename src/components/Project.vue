<template>
  <div class="section-group animate-on-scroll fade-in-up-slight faster">
    <div>
      <h2 class="section-sub-heading">
        {{ title }}
      </h2>
      <p>{{ description }}</p>
      <div class="button-group">
        <a
          v-for="(action, i) of actions"
          :key="i"
          class="section-button"
          :href="action.href"
          target="_blank"
          rel="noopener"
        >
          {{ action.text }}
        </a>
      </div>
    </div>
    <img
      class="project-img"
      :src="img"
      alt=""
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Project',
  props: {
    title: {
      type: String,
      default: null,
    },

    description: {
      type: String,
      default: null,
    },

    actions: {
      type: Array,
      default: () => [],
    },

    img: {
      type: String,
      default: null,
    },
  },

  setup() {

  },
});
</script>
