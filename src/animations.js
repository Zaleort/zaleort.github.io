let elements = [];
let height = window.innerHeight;

function getWindowHeight() {
  height = window.innerHeight;
}

function checkPos() {
  while (elements.length) {
    const posFromTop = elements[0].getBoundingClientRect().top;
    if (posFromTop - height > 0) return;

    elements[0].className = elements[0].className.replace('animate-on-scroll', 'animate');
  }
}

window.onload = () => {
  elements = document.getElementsByClassName('animate-on-scroll');
  getWindowHeight();
  checkPos();

  document.addEventListener('scroll', checkPos);
  document.addEventListener('resize', getWindowHeight);
};
