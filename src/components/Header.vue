<template>
  <header class="header">
    <i class="icon-circle animate fade-in" />
    <div class="header__content">
      <h1 class="header__name animate faster fade-in-up">
        Alexandre Henrique
      </h1>
      <h2 class="header__title animate faster fade-in-up delay-250">
        {{ title }}
      </h2>
      <p class="header__description">
        {{ description }}
      </p>
    </div>

    <a
      v-for="(action, i) of actions"
      :key="i"
      class="header__button"
      :href="action.href"
      target="_blank"
      rel="noopener"
    >
      {{ action.text }}
    </a>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
});
</script>
