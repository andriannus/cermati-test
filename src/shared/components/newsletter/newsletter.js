import { onBeforeMount, ref } from '@vue/composition-api';
import cookie from 'js-cookie';

import SlideTransition from '@/shared/components/slide-transition/SlideTransition.vue';
import { CMT_CLOSE_NEWSLETTER } from '@/shared/constants/cookie.constant';

export default {
  name: 'Newsletter',

  components: {
    SlideTransition,
  },

  setup() {
    const isShow = ref(true);

    const isClosed = () => !!cookie.get(CMT_CLOSE_NEWSLETTER);

    const onClose = () => {
      const inTenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000);

      isShow.value = false;

      cookie.set(CMT_CLOSE_NEWSLETTER, 'yes', {
        expires: inTenMinutes,
      });
    };

    onBeforeMount(() => {
      if (isClosed()) {
        isShow.value = false;
      }
    });

    return { isShow, onClose };
  },
};
