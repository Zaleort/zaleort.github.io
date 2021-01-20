<template>
  <header class="pt-header">
    <i class="icon-circle animate fade-in" />
    <div class="pt-header__content">
      <h1 class="pt-header__name animate faster fade-in-up">
        Alexandre Henrique
      </h1>
      <h2 class="pt-header__title animate faster fade-in-up delay-250">
        {{ title }}
      </h2>
      <p class="pt-header__description">
        {{ description }}
      </p>
    </div>

    <span
      v-for="(action, i) of actions"
      :key="i"
      class="pt-header__button"
      @click="scrollTo('about')"
    >
      {{ action.text }}
    </span>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ScrollTo from '@/lib/scrollTo';

export default defineComponent({
  name: 'Header',
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
      default: () => {},
    },
  },

  setup() {
    const scrollTo = ScrollTo;

    return {
      scrollTo,
    };
  },
});
</script>
