<template>
  <div>
    <Notification v-model="state.isShowNotification">
      <template #content>
        By accessing and using this website, you acknowledge that you
        have read and understand our
        <router-link to="/">Cookie Policy</router-link>,
        <router-link to="/">Privacy Policy</router-link>, and our
        <router-link to="/">Terms of Service</router-link>.
      </template>

      <template #action>
        <button class="button is-info" @click="toggleNotification">Got it</button>
      </template>
    </Notification>

    <section class="HeroShot hero is-medium">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img :src="state.logo" alt="Logo" />
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title has-text-weight-normal">Hello! I'm Andriannus Parasian</h1>
          <h2 class="subtitle has-text-weight-bold mb-2">Consult, Design, and Develop Websites</h2>
          <p>Have something great in mind? Feel free to contact me.</p>
          <p class="mb-5">I'll help you to make it happen.</p>

          <button class="button is-link is-inverted is-outlined is-uppercase">
            Let's make contact
          </button>
        </div>
      </div>
    </section>

    <Highlight />

    <div class="section pt-0">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div
            v-for="(content, index) in state.panelContents"
            :key="index"
            class="column is-one-third-desktop is-half-tablet is-full-mobile"
          >
            <Panel
              :description="content.description"
              :icon="content.icon"
              :title="content.title"
            />
          </div>
        </div>
      </div>
    </div>

    <Copyright />
    <Newsletter />
  </div>
</template>

<script src="./landing.js"></script>
<style lang="scss" src="./landing.scss" scoped></style>
