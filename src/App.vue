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
/* Global styles */
body {
  font-family: 'Courier New', Courier, monospace, sans-serif;
  background-color: #2b126f3a;
  margin: 0; /* Add this line */
  padding: 0; /* Add this line */
}

h2 { 
  font-size: 40px;
  text-decoration: underline;
  color: #2b126f;
  padding-bottom: 50px;
  margin-top: 50px;
}

#app {
  text-align: center;
}

label {
font-size: 24px;
}
</style>
