const es = {
  header: {
    title: 'Desarrollador Front-end',
    description: 'Autodidacta y perfeccionista, con experiencia en Vue',
    actions: [
      { href: '#projects', text: 'Ver portfolio' },
    ],
  },

  about: {
    title: 'Sobre mí',
    description: `Soy un entusiasta de la tecnología, autodidacta y perfeccionista, siempre en busca de nuevos retos para desarrollar
    mis habilidades. He trabajado en el desarrollo del front-end de una aplicación de gestión para corredurías de seguros y en un toolkit de 
    interfaz con Vue 3 y Composition API. Tengo un Grado Superior en Desarrollo de Aplicaciones Web y un buen nivel de inglés.`,
  },

  project: {
    title: 'Proyectos',
  },

  projects: {
    justDoList: {
      title: 'Just Do List',
      description: `Gestor de listas de tareas, que permite crear tareas diarias o con fecha límite.
        Cuenta con un sistema de etiquetas con el que puedes organizar las listas por colores. Está hecho
        con Vue.js y Firebase, junto con TypeScript y Sass.`,
      actions: [
        { href: 'https://github.com/Zaleort/JustDoList', text: 'Ver en GitHub', type: 'button' },
        { href: 'https://zaleort-1534268018714.firebaseapp.com/#/', text: 'Ver demo', type: 'button' },
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
        { href: 'https://github.com/Zaleort/NewsSender', text: 'Ver en GitHub', type: 'button' },
      ],
      img: require('../assets/newssender.png'),
    },

    rings: {
      title: 'Rings',
      description: `Rings es un videojuego de reflejos para Android, en el que el objetivo es tocar la pantalla antes de que
        el círculo central se salga de los anillos. Está programado en C# usando Unity y cuenta con un diseño bastante minimalista.`,
      actions: [
        { href: '', text: 'Ver en GitHub', type: 'button' },
        { href: '', text: 'Ver tráiler', type: 'button' },
      ],
      img: require('../assets/rings.png'),
    },
  },

  skills: {
    vue: {
      description: 'Vue 3',
      img: require('../assets/vue.png'),
    },

    typescript: {
      description: 'TypeScript',
      img: require('../assets/ts.png'),
    },

    sass: {
      description: 'Sass',
      img: require('../assets/sass.png'),
    },

    git: {
      description: 'Git',
      img: require('../assets/git.png'),
    },

    jest: {
      description: 'Jest',
      img: require('../assets/jest.png'),
    },

    webpack: {
      description: 'WebPack',
      img: require('../assets/webpack.png'),
    },

    nodejs: {
      description: 'NodeJs',
      img: require('../assets/nodejs.png'),
    },

    mongo: {
      description: 'MongoDB',
      img: require('../assets/mongodb.png'),
    },

    php: {
      description: 'PHP',
      img: require('../assets/php.png'),
    },
  },

  contact: {
    title: 'Contacto',
    description: 'Si te interesa mi trabajo, envíame un correo electrónico o contacta conmigo a través de LinkedIn',
  },
};

export default es;
