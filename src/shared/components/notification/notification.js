/* eslint-disable no-param-reassign */
import { computed } from '@vue/composition-api';

export default {
  name: 'Notification',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  setup(_, { slots }) {
    const isThereAction = computed(() => slots.action);

    const onLeave = (element) => {
      const { height } = getComputedStyle(element);

      element.style.height = height;

      requestAnimationFrame(() => {
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
      });
    };

    return {
      isThereAction,
      onLeave,
    };
  },
};
