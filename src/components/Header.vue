<template>
  <header class="custom-header">
      <nav class="header-nav">
          <nuxt-link to="/" class="header-nav-item">Home</nuxt-link>
          <nuxt-link to="/page1" class="header-nav-item">Page1</nuxt-link>
      </nav>
  </header>
</template>

<style lang="css">
    .custom-header {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100%;
        background-color: #41b883;
        padding: 1rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid #3b8070;
    }

    .header-nav {
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .header-nav-item {
        display: inline-block;
        padding-bottom: 1em;
        margin: 0 1em;
        color: #fff;
        text-decoration: none;
    }

    .nuxt-link-exact-active {
        border-bottom: 2px solid #3b8070;
    }
</style>
