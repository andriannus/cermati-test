<template>
  <SlideTransition>
    <div
      v-if="!value"
      class="Notification box has-background-light is-radiusless is-shadowless mb-0"
    >
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <div class="columns is-vcentered">
            <div :class="{ 'is-four-fifths': isThereAction }" class="column">
              <slot name="content"></slot>
            </div>

            <div
              v-if="isThereAction"
              class="column has-text-centered has-text-left-mobile"
            >
              <slot name="action"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideTransition>
</template>

<script src="./notification.js"></script>
<style lang="scss" src="./notification.scss" scoped></style>
