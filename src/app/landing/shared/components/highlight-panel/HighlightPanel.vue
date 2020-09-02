<template>
  <div class="card is-shadowless">
    <header class="card-header is-shadowless is-size-4">
      <p class="card-header-title">{{ title }}</p>

      <span class="card-header-icon has-text-grey-light">
        <span class="icon">
          <i :class="iconName" aria-hidden="true"></i>
        </span>
      </span>
    </header>

    <div class="card-content">
      <div class="content">{{ description }}</div>
    </div>
  </div>
</template>

<script src="./highlight-panel.js"></script>
<style lang="scss" src="./highlight-panel.scss" scoped></style>
