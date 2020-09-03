import { ref } from '@vue/composition-api';

import Logo from '@/assets/logo.png';
import Footer from './shared/components/footer/Footer.vue';
import Highlight from './shared/components/highlight/Highlight.vue';
import Panel from './shared/components/panel/Panel.vue';
import PANEL_CONTENTS from './shared/constants/landing.constant';

export default {
  metaInfo: {
    title: 'Andriannus Parasian',
  },

  components: {
    Footer,
    Highlight,
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
