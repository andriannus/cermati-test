import { ref } from '@vue/composition-api';

import Logo from '@/assets/logo.png';
import Panel from './shared/components/panel/Panel.vue';
import PANEL_CONTENTS from './shared/constants/landing.constant';

export default {
  components: {
    Panel,
  },

  setup() {
    const logo = ref(Logo);
    const panelContents = ref(PANEL_CONTENTS);

    return {
      logo,
      panelContents,
    };
  },
};
