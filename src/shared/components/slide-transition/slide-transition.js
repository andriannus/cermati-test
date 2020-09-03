export default {
  name: 'SlideTransition',

  setup() {
    const onLeave = (element) => {
      const { height } = getComputedStyle(element);

      element.style.height = height;

      requestAnimationFrame(() => {
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
      });
    };

    return { onLeave };
  },
};
