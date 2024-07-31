<template>
  <div>
    <h2>Marital Status</h2>
    <form @submit.prevent="nextPage">
      <div>
        <label for="maritalStatus">What is your marital status?</label>
        <select v-model="$root.formData.maritalStatus" required>
          <option>Single</option>
          <option>Married</option>
          <option>Divorced</option>
          <option>Widowed</option>
          <option>Domestic Partner</option>
        </select>
      </div>
      <NavigationButtons :currentStep="1" @nextStep="nextPage" @previousStep="previousPage" />
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
      const maritalStatus = this.$root.formData.maritalStatus;
      if (maritalStatus === 'Married' || maritalStatus === 'Domestic Partner') {
        this.$router.push('/partner-information');
      } else {
        this.$router.push('/children-information');
      }
    },
    previousPage() {
      this.$router.push('/');
    }
  }
};
</script>