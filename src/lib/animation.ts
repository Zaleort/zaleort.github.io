import { ref, onMounted } from 'vue';

const animation = () => {
  const elements = ref<HTMLElement[] | HTMLCollectionOf<Element>>([]);
  const height = ref(window.innerHeight);

  const getWindowHeight = () => {
    height.value = window.innerHeight;
  };

  const checkPos = () => {
    while (elements.value.length) {
      const posFromTop = elements.value[0].getBoundingClientRect().top;
      if (posFromTop - height.value > 0) return;

      elements.value[0].className = elements.value[0].className.replace('animate-on-scroll', 'animate');
    }
  };

  onMounted(() => {
    elements.value = document.getElementsByClassName('animate-on-scroll');
    getWindowHeight();
    checkPos();

    document.addEventListener('scroll', checkPos);
    document.addEventListener('resize', getWindowHeight);
  });

  return {
    elements,
    height,
    getWindowHeight,
    checkPos,
  };
};

export default animation;
