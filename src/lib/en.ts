const en = {
  header: {
    title: 'Front-end Developer',
    description: 'Autodidact and perfeccionist, with experience in Vue',
    actions: [
      { href: '#projects', text: 'See portfolio' },
    ],
  },

  about: {
    title: 'About me',
    description: `Soy un entusiasta de la tecnología, autodidacta y perfeccionista, siempre en busca de nuevos retos para desarrollar
      mis habilidades. He trabajado en el desarrollo del front-end de una aplicación de gestión para corredurías de seguros y en un toolkit de 
      interfaz con Vue 3 y Composition API. Tengo el Grado Superior en Desarrollo de Aplicaciones Web y un buen nivel de inglés.`,
  },

  project: {
    title: 'Projects',
  },

  projects: {
    justDoList: {
      title: 'Just Do List',
      description: `Gestor de listas de tareas, que permite crear tareas diarias o con fecha límite.
        Cuenta con un sistema de etiquetas con el que puedes organizar las listas por colores. Está hecho
        con Vue.js y Firebase, junto con TypeScript y Sass.`,
      actions: [
        { href: 'https://github.com/Zaleort/JustDoList', text: 'Source code', type: 'button' },
        { href: 'https://zaleort-1534268018714.firebaseapp.com/#/', text: 'Demo', type: 'button' },
      ],
      img: require('../assets/justdolist.png'),
    },

    newsSender: {
      title: 'News Sender',
      description: `Se trata de un programa hecho en Java, que mediante una versión headless de Chrome y Selenium Webdriver
        se conecta a BlastingNews, incia sesión con un usuario y envía los datos de la noticia que se quiera
        publicar en la plataforma. El programa se encarga de elegir una foto de portada y las etiquetas si no
        se especifican.`,
      actions: [
        { href: 'https://github.com/Zaleort/NewsSender', text: 'Source code', type: 'button' },
      ],
      img: require('../assets/newssender.png'),
    },

    rings: {
      title: 'Rings',
      description: `Rings es un videojuego de reflejos para Android, en el que el objetivo es tocar la pantalla antes de que
        el círculo central se salga de los anillos. Está programado en C# usando Unity.`,
      actions: [],
      img: require('../assets/rings.png'),
    },
  },

  skills: {

  },

  contact: {
    title: 'Contact',
    description: 'If you are interested, send me an email or contact me via LinkedIn',
  },
};

export default en;
