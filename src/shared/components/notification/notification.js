import { computed } from '@vue/composition-api';

import SlideTransition from '@/shared/components/slide-transition/SlideTransition.vue';

export default {
  name: 'Notification',

  components: {
    SlideTransition,
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  setup(_, { slots }) {
    const isThereAction = computed(() => slots.action);

    return { isThereAction };
  },
};
