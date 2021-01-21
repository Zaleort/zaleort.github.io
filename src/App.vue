<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import animation from '@/lib/animation';

export default defineComponent({
  setup() {
    const { elements, height } = animation();

    return {
      elements,
      height,
    };
  },
});
</script>
