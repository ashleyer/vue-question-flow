<template>
  <header class="header">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Company Logo" class="logo" />
    </div>
    <nav class="nav">
      <router-link to="/" class="nav-link">Start Over</router-link>
      <router-link to="/register" class="nav-link">Register</router-link>
      <router-link to="/login" class="nav-link">Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  border-bottom: 5px solid #111112;
}

.logo {
  max-width: 644px;
  padding-left: 100px;

}

.nav {
  display: flex;
  gap: 20px;
  padding-right: 100px;
  padding-bottom: 0px;
  
}

.nav-link {
  text-decoration: underline black;
  color: #2b126f;
  font-weight: bold;
  font-size: 25px;
}

.nav-link:hover {
  text-decoration: overline black
}
</style>