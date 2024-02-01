<template>
  <div id="app" class="appContainer">
    <Header />
    <Main class="mainContent"></Main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.appContainer {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  min-width: 100vw;
}

.mainContent {
  flex: 1;
}
</style>