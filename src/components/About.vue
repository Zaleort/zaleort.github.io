<template>
  <section class="pt-about">
    <img class="pt-about__avatar" src="../assets/avatar.jpg">
    <div class="pt-about__text">
      <h2 class="pt-about__heading">
        {{ title }}
      </h2>
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
