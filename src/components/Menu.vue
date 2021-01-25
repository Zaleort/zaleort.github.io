<template>
  <nav class="pt-menu">
    <div class="pt-menu__options">
      <span class="pt-menu-item" @click="scrollTo('projects')">
        Proyectos
      </span>
      <span class="pt-menu-item" @click="scrollTo('about')">
        Sobre mí
      </span>
      <span class="pt-menu-item" @click="scrollTo('contact')">
        Contacto
      </span>
    </div>
    <div class="pt-menu__languages">
      <span
        :class="{
          'pt-menu-item': true,
          'is-selected': lang === 'es'
        }"
        @click="setLang('es')"
      >
        <img
          class="pt-menu-item__lang"
          src="../assets/spain.svg"
          alt="Español"
        >
      </span>
      <span
        :class="{
          'pt-menu-item': true,
          'is-selected': lang === 'en'
        }"
        @click="setLang('en')"
      >
        <img
          class="pt-menu-item__lang"
          src="../assets/uk.svg"
          alt="English"
        >
      </span>
    </div>
  </nav>
</template>

<script lang="ts">
import { ComputedRef, defineComponent, inject } from 'vue';
import ScrollTo from '@/lib/scrollTo';

export default defineComponent({
  name: 'Menu',
  setup() {
    const scrollTo = ScrollTo;
    const lang = inject<ComputedRef>('lang');
    const setLang = inject<Function>('setLang');

    return {
      scrollTo,
      lang,
      setLang,
    };
  },
});
</script>
