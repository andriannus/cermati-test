import { computed } from '@vue/composition-api';

export default {
  name: 'Panel',

  props: {
    description: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const iconName = computed(() => `fas fa-${props.icon}`);

    return {
      iconName,
    };
  },
};
