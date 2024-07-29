<template>
  <div>
    <h2>Personal Information</h2>
    <form @submit.prevent="nextPage">
      <div>
        <label for="fullName">What is your full legal name?</label>
        <input type="text" v-model="$root.formData.fullName" required />
      </div>
      <div>
        <label for="birthYear">What is your birth year?</label>
        <input type="text" v-model="$root.formData.birthYear" required />
      </div>
      <NavigationButtons :currentStep="0" @nextStep="nextPage" />
    </form>
  </div>
</template>

<script>
import NavigationButtons from './NavigationButtons.vue';

export default {
  components: {
    NavigationButtons
  },
  methods: {
    nextPage() {
      this.$router.push('/marital-status').catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    }
  }
};
</script>