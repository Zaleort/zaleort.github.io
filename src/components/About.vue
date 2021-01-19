<template>
  <section class="section">
    <div class="section--about__content">
      <h1 id="about" class="section-heading">
        {{ title }}
      </h1>
      <p>
        {{ description }}
      </p>
    </div>
    <img class="section--about__avatar" src="../assets/avatar.jpg">
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
