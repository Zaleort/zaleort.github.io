<template>
  <section class="pt-about">
    <h1 id="about" class="pt-section__heading">
      {{ title }}
    </h1>
    <div class="pt-about__content">
      <img class="pt-about__avatar" src="../assets/avatar.jpg">
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
