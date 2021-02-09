const en = {
  header: {
    title: 'Front-end Developer',
    description: 'Autodidact and perfectionist, with experience in Vue',
    actions: [
      { href: '#projects', text: 'See portfolio' },
    ],
  },

  about: {
    title: 'About me',
    description: `I'm a technology enthusiast, autodidact and perfectionist, always searching for new challenges to develop my skills.
      I've worked in the development of a management web app for assurance brokerages and an interface toolkit with Vue 3 and its Composition API.`,
  },

  project: {
    title: 'Projects',
  },

  projects: {
    justDoList: {
      title: 'Just Do List',
      description: `To-do list manager that allows you to create daily and pending tasks with a specified deadline. It has 
        a tag system to organize your tasks by color. It's developed with Vue, Firebase, TypeScript and Sass.`,
      actions: [
        { href: 'https://github.com/Zaleort/JustDoList', text: 'Source code', type: 'button' },
        { href: 'https://zaleort-1534268018714.firebaseapp.com/#/', text: 'Demo', type: 'button' },
      ],
      img: require('../assets/justdolist.png'),
    },

    newsSender: {
      title: 'News Sender',
      description: `A Java program that logs in BlastingNews and sends the news data that you want to publish. It uses a headless version of Chrome
        and Selenium WebDriver to scrap the web page. The program also selects a photo and the tags if they're not specified.`,
      actions: [
        { href: 'https://github.com/Zaleort/NewsSender', text: 'Source code', type: 'button' },
      ],
      img: require('../assets/newssender.png'),
    },

    rings: {
      title: 'Rings',
      description: `Rings is an Android reflex game. Tap the rings while the circle is between them to score points and progress. Each level
        changes the rings behavior. It's developed in Unity and C#, it has a very minimalistic design.`,
      actions: [
        { href: '', text: 'Source code', type: 'button' },
        { href: '', text: 'Check trailer', type: 'button' },
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

  skill: {
    title: 'Skills',
  },

  contact: {
    title: 'Contact',
    description: 'If you are interested, send me an email or contact me via LinkedIn',
  },
};

export default en;
