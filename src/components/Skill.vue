<template>
  <div class="pt-skill__content">
    <img
      class="pt-skill__img"
      :src="img"
      alt=""
    >
    {{ description }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Skill',
  props: {
    description: {
      type: String,
      default: null,
    },

    img: {
      type: String,
      default: null,
    },
  },
});
</script>
