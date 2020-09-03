<template>
  <transition name="slide" @leave="onLeave">
    <slot></slot>
  </transition>
</template>

<script src="./slide-transition.js"></script>
<style lang="scss" src="./slide-transition.scss" scoped></style>
