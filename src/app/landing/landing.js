import { reactive } from '@vue/composition-api';

import Logo from '@/assets/logo.png';
import Newsletter from '@/shared/components/newsletter/Newsletter.vue';
import Notification from '@/shared/components/notification/Notification.vue';

import Copyright from './shared/components/copyright/Copyright.vue';
import Highlight from './shared/components/highlight/Highlight.vue';
import Panel from './shared/components/panel/Panel.vue';
import { PANEL_CONTENTS } from './shared/constants/landing.constant';

export default {
  metaInfo: {
    title: 'Andriannus Parasian',
  },

  components: {
    Copyright,
    Highlight,
    Newsletter,
    Notification,
    Panel,
  },

  setup() {
    const state = reactive({
      logo: Logo,
      isShowNotification: false,
      panelContents: PANEL_CONTENTS,
    });

    const toggleNotification = () => {
      state.isShowNotification = !state.isShowNotification;
    };

    return { state, toggleNotification };
  },
};
