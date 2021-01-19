<template>
  <Header v-bind="header" />
  <about v-bind="about" />

  <section class="pt-section">
    <project
      v-for="(project, name) of projects"
      :key="name"
      v-bind="project"
    />
  </section>

  <contact v-bind="contact" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import langs from '@/lib/Languages';
import Project from '@/components/Project.vue';
import Header from '@/components/Header.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import { Languages } from '@/interfaces/Language';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    About,
    Project,
    Contact,
  },

  setup() {
    const lang = ref('es');
    const languages = langs as Languages;

    const projects = computed(() => languages[lang.value].projects);
    const header = computed(() => languages[lang.value].header);
    const about = computed(() => languages[lang.value].about);
    const contact = computed(() => languages[lang.value].contact);

    return {
      languages,
      lang,
      header,
      about,
      projects,
      contact,
    };
  },
});
</script>
