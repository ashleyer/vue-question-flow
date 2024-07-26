<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style>
/* Global styles can go here */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
}
</style>