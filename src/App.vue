<script>
import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <main>
    <header>
      <div id="app">
        <AppHeader />
        <div class="container mt-3">
          <router-view />
        </div>
      </div>
    </header>
    <footer>
      <AppFooter />
    </footer>
  </main>
</template>

<style>
.page {
max-width: 400px;
margin: auto;
}
</style>
