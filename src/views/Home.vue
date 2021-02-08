<template>
  <Header
    v-bind="header"
    :project="projectSection.title"
    :about="about.title"
    :contact="contact.title"
  />
  <about v-bind="about" />

  <section id="projects" class="pt-section">
    <h1 class="pt-section__heading">
      {{ projectSection.title }}
    </h1>
    <project
      v-for="(project, name) of projects"
      :key="name"
      v-bind="project"
    />
  </section>

  <section id="skills" class="pt-section">
    <h1 class="pt-section__heading">
      {{ skillSection.title }}
    </h1>
    <div class="pt-skill">
      <skill
        v-for="(skill, name) of skills"
        :key="name"
        v-bind="skill"
      />
    </div>
  </section>

  <contact v-bind="contact" />
</template>

<script lang="ts">
import {
  computed, ComputedRef, defineComponent, inject,
} from 'vue';
import langs from '@/lib/Languages';
import Header from '@/components/Header.vue';
import About from '@/components/About.vue';
import Project from '@/components/Project.vue';
import Skill from '@/components/Skill.vue';
import Contact from '@/components/Contact.vue';
import { Languages } from '@/interfaces/Language';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    About,
    Project,
    Skill,
    Contact,
  },

  setup() {
    const lang = inject<ComputedRef>('lang');

    if (typeof lang === 'undefined') {
      console.warn('Ha ocurrido un error con el idioma');
      return {};
    }

    const languages = langs as Languages;

    const header = computed(() => languages[lang.value].header);
    const about = computed(() => languages[lang.value].about);
    const projectSection = computed(() => languages[lang.value].project);
    const projects = computed(() => languages[lang.value].projects);
    const skills = computed(() => languages[lang.value].skills);
    const skillSection = computed(() => languages[lang.value].skill);
    const contact = computed(() => languages[lang.value].contact);

    return {
      languages,
      lang,
      header,
      about,
      projects,
      projectSection,
      skills,
      skillSection,
      contact,
    };
  },
});
</script>
