import { reactive } from '@vue/composition-api';

import Logo from '@/assets/logo.png';
import Notification from '@/shared/components/notification/Notification.vue';
import Copyright from './shared/components/copyright/Copyright.vue';
import Highlight from './shared/components/highlight/Highlight.vue';
import Panel from './shared/components/panel/Panel.vue';
import PANEL_CONTENTS from './shared/constants/landing.constant';

export default {
  metaInfo: {
    title: 'Andriannus Parasian',
  },

  components: {
    Copyright,
    Highlight,
    Notification,
    Panel,
  },

  setup() {
    const state = reactive({
      logo: Logo,
      isShow: false,
      panelContents: PANEL_CONTENTS,
    });

    const toggleNotification = () => {
      state.isShow = !state.isShow;
    };

    return {
      state,
      toggleNotification,
    };
  },
};
