/* eslint-disable no-param-reassign */
import { onBeforeMount, ref } from '@vue/composition-api';
import cookie from 'js-cookie';

import { CMT_CLOSE_NEWSLETTER } from '@/shared/constants/cookie.constant';

export default {
  name: 'Newsletter',

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

    const onLeave = (element) => {
      const { height } = getComputedStyle(element);

      element.style.height = height;

      requestAnimationFrame(() => {
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
      });
    };

    onBeforeMount(() => {
      if (isClosed()) {
        isShow.value = false;
      }
    });

    return {
      isShow,
      onClose,
      onLeave,
    };
  },
};
