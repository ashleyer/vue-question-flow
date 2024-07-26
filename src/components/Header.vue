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
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #111112;
}

.logo {
  max-width: 350px; /* Increase the max-width to make the logo bigger */
}

.nav {
  display: flex;
  gap: 15px;
}

.nav-link {
  text-decoration: none;
  color: #2b126f;
  font-weight: bold;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>