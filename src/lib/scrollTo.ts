const scrollTo = (id: string) => {
  const el = document.getElementById(id);

  if (!el) return;

  const top = el.offsetTop;
  window.scrollTo(0, top);
};

export default scrollTo;
