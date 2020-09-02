import { ref } from '@vue/composition-api';

import Logo from '@/assets/logo.png';
import HighlightPanel from './shared/components/highlight-panel/HighlightPanel.vue';
import PANEL_CONTENTS from './shared/constants/landing.constant';

export default {
  components: {
    HighlightPanel,
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
