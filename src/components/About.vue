<template>
  <section class="pt-section pt-section--group">
    <img class="pt-about__avatar" src="../assets/avatar.jpg">
    <div class="pt-about__content">
      <h1 id="about" class="pt-section__heading">
        {{ title }}
      </h1>
      <p>
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
  props: {
    title: {
      type: String,
      default: null,
    },

    description: {
      type: String,
      default: null,
    },
  },
});
</script>
