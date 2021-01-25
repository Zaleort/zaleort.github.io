<template>
  <router-view />
</template>

<script lang="ts">
import {
  computed,
  defineComponent, onMounted, provide, ref,
} from 'vue';
import animation from '@/lib/animation';

export default defineComponent({
  setup() {
    const { elements, height } = animation();
    const lang = ref('en');
    const setLang = (newLang: string) => {
      lang.value = newLang;
    };

    onMounted(() => {
      const userLang = navigator.language;

      if (userLang.includes('es')) {
        lang.value = 'es';
      }
    });

    provide('lang', computed(() => lang.value));
    provide('setLang', setLang);

    return {
      elements,
      height,
      lang,
      setLang,
    };
  },
});
</script>
