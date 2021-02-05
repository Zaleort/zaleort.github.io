<template>
  <header class="pt-header">
    <Menu
      :project="project"
      :about="about"
      :contact="contact"
    />

    <div class="pt-header__main">
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
import Menu from '@/components/Menu.vue';
import ScrollTo from '@/lib/scrollTo';

export default defineComponent({
  name: 'Header',
  components: {
    Menu,
  },

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

    project: {
      type: String,
      default: null,
    },

    about: {
      type: String,
      default: null,
    },

    contact: {
      type: String,
      default: null,
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
