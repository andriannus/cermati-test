<template>
  <div>
    <section class="HeroShot hero is-medium">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img :src="logo" alt="Logo" />
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

    <section class="hero is-light has-text-centered py-4">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">How Can I Help You?</h1>
          <h2 class="subtitle">
            Our work then targeted, best practices outcomes social innovation synergy.
            <br />Ventur philanthropy, revolutionary inclusive policymaker relief.
            User-centered program areas scale.
          </h2>
        </div>
      </div>
    </section>

    <div class="section pt-0">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div
            v-for="(content, index) in panelContents"
            :key="index"
            class="column is-one-third-desktop is-half-tablet is-full-mobile"
          >
            <highlight-panel
              :description="content.description"
              :icon="content.icon"
              :title="content.title"
            ></highlight-panel>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer has-text-white">
      <div class="content has-text-centered">
        <p>&copy; 2020 Andriannus Parasian. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script src="./landing.js"></script>
<style lang="scss" src="./landing.scss" scoped></style>
