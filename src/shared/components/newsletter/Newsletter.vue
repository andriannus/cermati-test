<template>
  <SlideTransition>
    <div v-if="isShow" class="Newsletter box">
      <button
        class="Newsletter-closeButton button is-small"
        @click="onClose"
      >
        <span class="icon">
          &times;
        </span>
      </button>

      <h2 class="is-size-4 has-text-weight-bold">
        Get latest updates in web technologies
      </h2>

      <p class="mb-5">
        I write articles related to web technologies, such as design trends,
        development tools, UI/UX case studies and reviews, and more.
        Sign up to my newsletter to get them all.
      </p>

      <div class="columns">
        <p class="column is-9">
          <label>
            <input class="input" type="text" placeholder="Email address" />
          </label>
        </p>

        <p class="column">
          <button
            class="Newsletter-subscribeButton button is-fullwidth"
            type="button"
          >
            Count me in!
          </button>
        </p>
      </div>
    </div>
  </SlideTransition>
</template>

<script src="./newsletter.js"></script>
<style lang="scss" src="./newsletter.scss" scoped></style>
