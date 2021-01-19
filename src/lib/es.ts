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
      mis habilidades. Recientemente he obtenido el título de Grado Superior en Desarrollo Front-end y he trabajado
      6 meses diseñando y maquetando páginas web con WordPress en Almería.`,
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
        el círculo central se salga de los anillos. Está programado en C# usando Unity.`,
      actions: [],
      img: require('../assets/rings.png'),
    },
  },

  skills: {

  },

  contact: {
    title: 'Contacto',
    description: 'Si te interesa mi trabajo, envíame un correo electrónico o contacta conmigo a través de LinkedIn',
  },
};

export default es;
