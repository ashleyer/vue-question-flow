
<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Implement your login logic here
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // Example: Call an API to authenticate the user
      // axios.post('/api/login', { email: this.email, password: this.password })
      //   .then(response => {
      //     // Handle successful login
      //   })
      //   .catch(error => {
      //     // Handle login error
      //   });
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>